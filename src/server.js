const express = require('express')
const mongoose = require('mongoose')
const path = require("path")

mongoose.connect("mongodb://localhost/omnistack", {
  useNewUrlParser: true
})

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

app.listen(3000)
console.log('App runing on port 3000')