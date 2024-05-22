import express from 'express'
import { ValidationError } from './ValidationError.mjs'
import { NotFoundError } from './NotFoundError.mjs'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  Promise.reject(new Error("Can't get the data")).catch((err) => next(err))
})

app.get('/json', (req, res, next) => {
  Promise.reject(new ValidationError('Custom validation message')).catch((err) => next(err))
})

app.get('/not-found', (req, res, next) => {
  Promise.reject(new NotFoundError('Resource not found')).catch((err) => next(err))
})

app.use((err, req, res, next) => {
  if (err instanceof ValidationError || err instanceof NotFoundError) {
    console.error(`${err.name}:`, err.message)
    console.error('Status code:', err.statusCode)
    res.status(err.statusCode).json({ error: err.name, message: err.message })
  } else {
    console.error('Error:', err.message)
    res.status(500).json({ message: err.message })
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
