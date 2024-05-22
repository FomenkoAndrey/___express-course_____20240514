import express from 'express'

const app = express()

const person = { name: 'John', age: 25 }
const personJson = JSON.stringify(person)

app.get('/', (req, res) => {
  res.header({
    'Content-Type': 'application/json',
    'X-Custom-Header': 'CustomValue',
    'X-Powered-By': 'ExpressApp',
    'X-Hello': 'World'
  })

  res.end(personJson)
})

app.listen(3000)
