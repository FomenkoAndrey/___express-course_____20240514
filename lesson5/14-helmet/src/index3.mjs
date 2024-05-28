import express from 'express'
import helmet from 'helmet'

const app = express()

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: [`'self'`],
        scriptSrc: [`'self'`, 'https://trustedscripts.example.com'],
        objectSrc: [`'none'`],
        upgradeInsecureRequests: []
      },
      useDefaults: true
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },
    referrerPolicy: { policy: 'no-referrer' }
  })
)

app.get('/', (req, res) => {
  res.send('Привіт, світ!')
})

app.listen(3000, () => {
  console.log('Сервер запущено на http://localhost:3000')
})
