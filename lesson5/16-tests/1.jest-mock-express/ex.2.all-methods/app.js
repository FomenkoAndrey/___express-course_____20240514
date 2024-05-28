const express = require('express')
const app = express()

app.get('/hello', (req, res) => res.send('GET Hello, world!'))
app.post('/hello', (req, res) => res.send('POST Hello, world!'))
app.put('/hello', (req, res) => res.send('PUT Hello, world!'))
app.patch('/hello', (req, res) => res.send('PATCH Hello, world!'))
app.delete('/hello', (req, res) => res.send('DELETE Hello, world!'))
app.options('/hello', (req, res) => res.send('OPTIONS Hello, world!'))

module.exports = app
