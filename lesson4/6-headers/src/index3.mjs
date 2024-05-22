import express from 'express'

const app = express()

const person = { name: 'John', age: 25 }
const personJson = JSON.stringify(person)

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.setHeader('X-Custom-Header', 'CustomValue')
  res.setHeader('X-Powered-By', 'ExpressApp')
  res.setHeader('X-Hello', 'World')

  res.end(personJson)
})

app.listen(3000)
