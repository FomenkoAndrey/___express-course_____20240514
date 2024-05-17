import express from 'express'
import router from './routes/index.mjs'
import { errors } from 'celebrate'

const PORT = 3000
const app = express()

app.use(express.json())
app.use(router)
app.use(errors()) // Обробник помилок від celebrate

// Загальний обробник помилок
app.use((err, req, res, next) => {
  if (!res.headersSent) {
    res.status(err.status || 500).json({
      status: 'error',
      message: err.message || 'Internal server error'
    })

  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
