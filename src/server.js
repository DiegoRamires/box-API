const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3000)
console.log('App runing on port 3000')