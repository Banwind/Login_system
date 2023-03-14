const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')

router.post('/', (req, res) => {
  const { name, email, password} = req.body
  userModel.findOne({ email })
    .lean()
    .then((doc) => {
      if (doc.password === password) {
        res.render('home', { doc })
      } else {
        res.render('index', { error: '密碼錯誤!!'})
      }
    })
    .catch(error => console.log(error))
})

module.exports = router