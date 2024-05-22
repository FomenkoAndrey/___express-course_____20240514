import express from 'express'

const app = express()
const port = 3000

app.get('/', async (req, res, next) => {
  try {
    await Promise.reject(new Error("Can't get the data"))
  } catch (err) {
    next(err)
  }
})

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`)
  res.status(500).json({ message: err.message })
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
