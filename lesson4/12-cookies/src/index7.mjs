import express from 'express'
import session from 'express-session'

const app = express()

app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })
)

app.get('/', (req, res) => {
  if (req.session.page_views) {
    req.session.page_views++
    res.send(`Ви відвідали цю сторінку ${req.session.page_views} разів`)
  } else {
    req.session.page_views = 1
    res.send('Ласкаво просимо на цю сторінку вперше!')
  }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
