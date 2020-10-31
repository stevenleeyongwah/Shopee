// import
const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const config = require('config')
const cors = require('cors')
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

// configuration
const app = express();
const mongoURL = config.get('mongoURL')
const port = process.env.PORT || 3005
let gfs

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      console.log("file: ", file)
      crypto.randomBytes(16, (err, buf) => {
        console.log("buf: ", buf.toString('hex'))
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads',
          contentType: "image/jpeg"
        };

        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// routes
const items = require('./routes/items')
const auth  = require('./routes/auth')

// Model
const Item = require('./models/item')

// Middleware
app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// app.use('/items', items)
// app.use('/auth', auth)

// Run nodejs App
app.listen(port, console.log(`Listening to port ${port}`))

// Connect to mongodb
mongoose.connect(mongoURL)
        .then( console.log("Successfully connected to mongodb"))

// Create mongo connection
const conn = mongoose.createConnection(mongoURL);

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// @route GET /image/:itemname
// @desc Display Image
app.get('/item/:itemID', async (req, res) => {
  try {
    const item = await Item.findById(req.params.itemID)

    gfs.files.findOne({ _id: mongoose.Types.ObjectId(item.imageID) }, (err, file) => {
      // Check if file
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        });
      }

      // Check if image
      if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Read output to browser
        const readstream = gfs.createReadStream(file.filename)

        // readstream.pipe(res);
        readstream.on('data', (chunk) => {
          res.json({ ...item._doc, image: chunk.toString('base64') })
        })
      } else {
        res.status(404).json({
          err: 'Not an image'
        });
      }
    });
  } catch (err) {
    console.log("err: ", err)
  }

});

const resolveImage = (filename) => {
    const readstream = gfs.createReadStream(filename);
    return new Promise(function (resolve, reject) {
      readstream.on('data', (chunk) => {
        resolve(chunk)
      })
    })
}

const getArrayImages = (files) => {
  arrayImages = []

  return new Promise(async function (resolve, reject) {
    for (let i=0; i<files.length; i++){
      // Check if image
      if (files[i].contentType === 'image/jpeg' || files[i].contentType === 'image/png') {
        const item = await Item.find({ "imageID": files[i]._id })
        const chunk = await resolveImage(files[i].filename)

        arrayImages.push({ ...item[0]._doc, "chunk": chunk.toString('base64') })
      }
    }
    resolve(arrayImages)
  })
}

// @route GET /images
// @desc  Display all files in JSON
app.get('/imagess', async (req, res) => {
  gfs.files.find().toArray(async (err, files) => {
    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }
    console.log("Start to get getArrayImages")
    var arrayImages = await getArrayImages(files);
    console.log("End getArrayImages")
    // console.log("arrayImages: ", arrayImages)
    res.json(arrayImages);
  });
});

// @route GET /files
// @desc  Display all files in JSON
app.get('/files', (req, res) => {
  gfs.files.find().toArray((err, files) => {

    // Check if files
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: 'No files exist'
      });
    }

    // Files exist
    return res.json(files);
  });
});

// @route POST /upload
// @desc  Uploads file to DB
app.post('/upload', upload.single('file'), async (req, res) => {
  try {
    // Extract form-data
    const { ProductName, ProductDescription, Category, Brand, Price, StockAvailable } = req.body

    // Create instance of Item
    const item = new Item({
      "ProductName": ProductName,
      "ProductDescription": ProductDescription,
      "Category": Category,
      "Brand": Brand,
      "Price": Price,
      "StockAvailable": StockAvailable,
      "imageID": req.file.id,
    })

    // Save item to database
    const saveOutput = await item.save()

    // Save the output
    res.json({ saveOutput: saveOutput })
  } catch (err) {
    res.json({err: err})
  }
});
