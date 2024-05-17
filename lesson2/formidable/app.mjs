import express from 'express'
import formidable from 'formidable'
import path from 'path'
import fs from 'fs/promises'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

app.get('/', (req, res) => {
  res.send(`
    <h2>Upload a file</h2>
    <form action="api/upload" method="post" enctype="multipart/form-data">
      <div>File: <input type="file" name="uploadFile"></div>
      <button type="submit">Upload</button>
    </form>
  `)
})

app.post('/api/upload', async (req, res) => {
  const form = formidable({ multiples: true })

  try {
    const { files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err)
        else resolve({ fields, files })
      })
    })

    if (!files || !('uploadFile' in files)) {
      res.status(400).send('No file uploaded')
      return
    }

    const file = files.uploadFile instanceof Array ? files.uploadFile[0] : files.uploadFile
    const oldPath = file.filepath
    const newPath = path.join(__dirname, 'uploads', file.originalFilename)

    await fs.copyFile(oldPath, newPath)
    res.send('File uploaded successfully')
  } catch (error) {
    console.error(error)
    res.status(500).send('Something went wrong')
  }

})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
