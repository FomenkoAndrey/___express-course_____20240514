import express from 'express'
import { ValidationError } from './ValidationError.mjs'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  Promise.reject(new Error("Can't get the data")).catch((err) => next(err))
})

app.get('/json', (req, res, next) => {
  Promise.reject(new ValidationError('Custom validation message')).catch((err) => next(err))
})

app.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    console.error('ValidationError:', err.message)
    res.status(400).json({ error: 'Validation failed', message: err.message })
  } else {
    console.error('Error:', err.message)
    res.status(500).json({ message: err.message })
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
