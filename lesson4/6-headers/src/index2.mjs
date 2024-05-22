import express from 'express'

const app = express()

const person = { name: 'John', age: 25 }
const personJson = JSON.stringify(person)

app.get('/', (req, res) => {
  res.end(personJson)
})

app.get('/json', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  res.end(personJson)
})

app.get('/text', (req, res) => {
  res.send(personJson)
})

app.get('/auto', (req, res) => {
  res.json(person)
})

app.listen(3000)
