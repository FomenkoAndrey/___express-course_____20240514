import express from 'express'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
})

app.post('/login', (req, res) => {
  console.log(req.body)
  const { username, password } = req.body

  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'your-secret-key', { algorithm: 'HS512', expiresIn: '30s' })
    res.cookie('token', token, { httpOnly: true, maxAge: 60000 })
    res.json({ message: 'Ви успішно увійшли' })
  } else {
    res.status(401).send('Невірний логін або пароль')
  }
})

const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token

  if (token) {
    jwt.verify(token, 'your-secret-key', (err, user) => {
      if (err) {
        return res.status(403).json({ message: 'Доступ заборонено або токен недійсний' })
      }
      req.user = user
      next()
    })
  } else {
    res.status(401).json({ message: 'Необхідна авторизація' })
  }
}

app.get('/protected', authenticateJWT, (req, res) => {
  res.json({ message: 'Все ОК! Ви зайшли на захищений маршрут' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
