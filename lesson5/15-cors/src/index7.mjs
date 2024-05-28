import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import apiRoutes from './routes.mjs'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

const whitelist = ['http://localhost:63342', 'http://localhost:4000', 'http://localhost:3000']

const corsOptions = {
  origin: (origin, callback) => {
    console.log('Origin received:', origin)
    if (!origin || whitelist.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('CORS не дозволено для цього джерела'))
    }
  },
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use(express.static(__dirname + '/public'))

app.use(apiRoutes)

const PORT = 4000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
