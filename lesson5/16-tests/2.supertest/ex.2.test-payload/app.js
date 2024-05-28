const express = require('express')
const app = express()

const data = [
  { id: 1, message: 'Hello, world!' },
  { id: 2, message: 'Привіт, світ!' }
]

app.get('/', (req, res) => {
  res.status(200).json(data)
})

module.exports = app
