import express from 'express'
import router from './routes/index.mjs'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
