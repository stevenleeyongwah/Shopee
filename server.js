// import
const express = require('express')
const mongoose = require('mongoose')
const path = require('path');
const config = require('config')
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

// configuration
const app = express();
const mongoURL = config.get('mongoURL')
const port = process.env.PORT || 5000
let gfs;

// routes
const items = require('./routes/items')

// Middleware
app.use(express.json())
app.use('/items', items)

// Run nodejs App
app.listen(port, console.log(`Listening to port ${port}`))

// Create mongo connection
const conn = mongoose.createConnection(mongoURL);

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// Create storage engine
const storage = new GridFsStorage({
  url: mongoURL,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

// @route GET /image/:filename
// @desc Display Image
app.get('/image/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No file exists'
      });
    }

    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      // readstream.pipe(res);
      readstream.on('data', (chunk) => {
        res.json({ image: chunk.toString('base64') });
      })
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});


// @route POST /upload
// @desc  Uploads file to DB
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});
