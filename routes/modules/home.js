const express = require('express')
const router = express.Router()
const userModel = require('../../models/userModel')

router.post('/', (req, res) => {
  const { name, email, password} = req.body
  userModel.findOne({ email })
    .lean()
    .then((doc) => {
      if (doc.password === password) {
        res.render('home', name)
      } else {
        alert('Wrong password')
      }
    })
    .catch(error => console.log(error))
})

module.exports = router