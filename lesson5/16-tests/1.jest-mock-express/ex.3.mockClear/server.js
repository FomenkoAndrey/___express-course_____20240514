const express = require('express')
const myController = require('./myController')
const server = express()

server.use(express.json())

server.get('/entity/:id', myController.getEntity)
server.post('/entity', myController.createEntity)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
