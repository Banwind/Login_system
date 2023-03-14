const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')

router.post('/', (req, res) => {
  const { email, password } = req.body
  userModel.findOne({ email })
    .lean()
    .then((doc) => {
      if (!doc) {
        res.render('index', { error: '帳號錯誤!!' })
      } else if (doc.password === password) {
        res.render('home', { doc })
      } else if (doc.password !== password) {
        res.render('index', { error: '密碼錯誤!!' })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router
