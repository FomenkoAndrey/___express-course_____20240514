import express from 'express'
import { log } from './utils/helpers.mjs'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const PORT = 3000
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  const data = {
    name: 'John Doe',
    age: 20,
    skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB']
  }

  log('data:', data, 'blue')

  res.json(data)
})

app.listen(PORT, () => {
  log(`Server is running on http://localhost:${PORT}`, 'yellow')
})
