import express from 'express'
import { fileURLToPath } from 'url'
import path from 'path'

const app = express()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname, '../data/sample.pdf')

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(500).send('Помилка при відправленні файлу: ' + err.message)
    }
  })
})

app.listen(3000)
