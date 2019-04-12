const express = require('express')
const mongoose = require('mongoose')
const path = require("path")

const app = express()

const server = require("http").Server(app)
const io = require("socket.io")(server)

io.on("connection", socket => {
  socket.on('connectRoom', box => {
    socket.join(box)
  })
})

mongoose.connect("mongodb://localhost/omnistack", {
  useNewUrlParser: true
})

app.use((req, res) => {
  req.io = io

  return next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

server.listen(3000)
console.log('App runing on port 3000')