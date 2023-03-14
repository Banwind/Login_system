const express = require('express')
const router = express.Router()
const userModel = require('../../models/usermodel')

router.post('/', (req, res) => {
  
  userModel.findOne({ email })
    .lean()
    .then((doc) => 
      if ()
    )
})

module.exports = router