const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const routes = require('./routes')
const PORT = 3000

require('./config/mongoose')

app.engine('hbs', exphbs({defaultLayouts: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

app.listen(PORT, () => {
  console.log(`This is running on localhost:${PORT}`)
})
