import express from 'express'

const app = express()

app.get('/', (req, res) => {
  const userAgentCapitalize = req.header('User-Agent')
  const userAgentLowerCase = req.header('user-agent')

  const contentTypeCapitalize = req.header('Content-Type')
  const contentTypeLowerCase = req.header('content-type')

  res.send(`
    User-Agent: ${userAgentCapitalize} — ${userAgentLowerCase}
    Content-Type: ${contentTypeCapitalize} — ${contentTypeLowerCase}
  `)
})

app.listen(3000)
