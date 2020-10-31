const express = require('express')
const router = express.Router()
const Item = require('../models/item')

router.get('/', (req, res) => {
  console.log("hi")
  Item.find()
      .sort({ date: -1 })
      .then(items => {
        res.json(items)
      })
})

router.post('/', (req, res) => {
  const newItem = new Item({
    title: req.body.title,
    seller: req.body.seller,
    price: req.body.price
  })
  console.log("hi")
  res.json("hi post")
  // newItem.save().then(item => {
  //   res.json(item)
  // })
})

module.exports = router
