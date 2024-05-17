import express from 'express'
import morgan from 'morgan'
import { log } from './utils/helpers.mjs'

const PORT = 3000
const app = express()

app.use(morgan('tiny'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res) => {
  log(req.body, 'red')
  res.send('Hello from Express!')
})

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`, 'yellow')
})
