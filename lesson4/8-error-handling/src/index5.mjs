import express from 'express'

const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  Promise.reject(new Error("Can't get the data"))
})

app.use((err, req, res, next) => {
  console.error(`Error: ${err.message}`)
  res.status(500).json({ message: err.message })
})

process.on('unhandledRejection', (reason, promise) => {
  console.error('Неперехоплене відхилення Promise')
  console.error('Причина:', reason.message)
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
