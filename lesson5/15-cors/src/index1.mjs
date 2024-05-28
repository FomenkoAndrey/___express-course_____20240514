import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + '/public'))

app.get('/api', (req, res) => {
  res.send('Запит GET успішно оброблено')
})

app.post('/api', (req, res) => {
  res.send('Запит POST успішно оброблено')
})

app.put('/api', (req, res) => {
  res.send('Запит PUT успішно оброблено')
})

app.delete('/api', (req, res) => {
  res.send('Запит DELETE успішно оброблено')
})

app.listen(3000, () => {
  console.log(`Server is running on port 3000`)
})
