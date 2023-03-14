const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const login = require('./modules/login')

// router.use('/home', home) //登入後第一個頁面
router.use('/', login) //登入畫面

module.exports = router
