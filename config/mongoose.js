const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alpha:camp@cluster0.dgxufmq.mongodb.net/login?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

// 加入這段 code, 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

module.exports = db
