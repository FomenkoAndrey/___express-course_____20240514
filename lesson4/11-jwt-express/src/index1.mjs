import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'your-secret-key', { algorithm: 'HS512', expiresIn: '1h' })

    res.setHeader('X-Token', token)
    res.json({ message: 'Аутентифікація успішна' })
  } else {
    res.status(401).send('Невірний логін або пароль')
  }
})

const authenticateJWT = (req, res, next) => {
  const token = req.headers['x-token']

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
