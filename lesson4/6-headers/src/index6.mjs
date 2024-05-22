import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.redirect('/final')
})

app.get('/google', (req, res) => {
  res.redirect('https://www.google.com')
})

app.get('/final', (req, res) => {
  res.send('Це кінцева сторінка після перенаправлення')
})

app.listen(3000)
