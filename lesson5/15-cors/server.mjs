import express from 'express'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.use(express.static(__dirname + '/src/public'))

app.listen(4000, () => {
  console.log(`Test server is running on port 4000`)
})
