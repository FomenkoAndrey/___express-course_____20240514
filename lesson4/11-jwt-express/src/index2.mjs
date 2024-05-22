import express from 'express'
import jwt from 'jsonwebtoken'

const app = express()
app.use(express.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body

  if (username === 'admin' && password === 'password') {
    const token = jwt.sign({ username }, 'your-secret-key', { algorithm: 'HS512', expiresIn: '1h' })

    res.json({ token })
  } else {
    res.status(401).send('Невірний логін або пароль')
  }
})

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (authHeader) {
    const token = authHeader.split(' ')[1]

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
  res.json({ message: 'Це захищений маршрут' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
