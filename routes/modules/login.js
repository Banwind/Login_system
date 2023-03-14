const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')

router.get('/', (req, res) => {
  userModel.find()
  .lean()
  .then(() => res.render('index'))
  .catch(error => console.log(error))
})

module.exports = router