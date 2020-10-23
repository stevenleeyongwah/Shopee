const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Item = new Schema({
  title: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Item', Item)
