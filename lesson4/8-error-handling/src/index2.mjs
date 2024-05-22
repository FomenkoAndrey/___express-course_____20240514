import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  const err = new Error("Can't get the data")
  next(err)
})

app.use((err, req, res) => {
  console.log('ERR:', err)
  console.log('REQ:', req)
  console.log('RES:', res)
  console.error(`Error: ${err.message}`)
  res.status(500).json({ message: err.message })
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
