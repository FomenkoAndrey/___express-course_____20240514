const express = require('express')
const app = express()

app.use(express.json())

const data = [
  { id: 1, message: 'Hello, world!' },
  { id: 2, message: 'Привіт, світ!' }
]

app.get('/', (req, res) => {
  res.status(200).json(data)
})

app.post('/', (req, res) => {
  const newItem = req.body
  newItem.id = data.length + 1
  data.push(newItem)
  res.status(201).json(newItem)
})

module.exports = app
