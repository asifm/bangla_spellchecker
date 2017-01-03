console.log("Server is starting.")

var express = require("express")

var index = require('./routes/index')
var search = require('./routes/search')

var app = express()

// view engine setup
app.set('views', 'views') // check this works
app.set('view engine', 'ejs')

app.use('/', index)
app.use('/', search)

app.use(express.static("public"))

module.exports = app