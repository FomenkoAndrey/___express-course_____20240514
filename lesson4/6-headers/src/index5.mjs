import express from 'express'

const app = express()

const person = { name: 'John', age: 25 }
const personJson = JSON.stringify(person)

app.get('/json', (req, res) => {
  res.type('json')
  res.send(personJson)
})

app.get('/text', (req, res) => {
  res.type('text')
  res.send('Це текстова відповідь')
})

app.get('/html', (req, res) => {
  res.type('html')
  res.send('<h1>Це HTML відповідь</h1>')
})

app.listen(3000)
