const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')

router.post('/', (req, res) => {

  userModel.findOne({ email })
    .lean()
    .then((doc) => 
      if ()
    )
})

module.exports = router

//還沒寫完