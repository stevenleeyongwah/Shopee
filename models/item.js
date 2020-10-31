const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
  ProductName: {
    type: String,
    required: true
  },
  ProductDescription: {
    type: String,
    required: true
  },
  Category: {
    type: String,
    required: true
  },
  Brand: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  StockAvailable: {
    type: Number,
    required: true
  },
  imageID: {
    type: Schema.Types.ObjectId,
    required: true
  }
})

module.exports = mongoose.model('Item', Item)
