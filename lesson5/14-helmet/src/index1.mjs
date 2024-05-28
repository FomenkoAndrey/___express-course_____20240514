import express from 'express'

const app = express()

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; form-action 'self'; frame-ancestors 'self';"
  )
  res.setHeader('Cross-Origin-Opener-Policy', 'same-origin')
  res.setHeader('Cross-Origin-Resource-Policy', 'same-origin')
  res.setHeader('Origin-Agent-Cluster', '?1')
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.setHeader('Strict-Transport-Security', 'max-age=15552000; includeSubDomains')
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-DNS-Prefetch-Control', 'off')
  res.setHeader('X-Download-Options', 'noopen')
  res.setHeader('X-Frame-Options', 'SAMEORIGIN')
  res.setHeader('X-Permitted-Cross-Domain-Policies', 'none')
  res.setHeader('X-XSS-Protection', '0')

  next()
})

app.get('/', (req, res) => {
  res.send('Привіт, світ!')
})

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})
