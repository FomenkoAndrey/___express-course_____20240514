import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(helmet())

app.get('/', (req, res) => {
  res.send('Привіт, світ!')
})

app.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000')
})
