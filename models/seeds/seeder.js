const userModel = require('../userModel')
const userJSON = require('../../users.json').results
const db = require('../../config/mongoose')

db.once('open', () => {
  const createUsers = userJSON.map(data => userModel.create({...data}))
  Promise.all(createUsers)
    .then(() => {
      console.log('Success create user')
      db.close()
    })
    .catch(error => {
      console.log(error)
      db.close()
    })
})