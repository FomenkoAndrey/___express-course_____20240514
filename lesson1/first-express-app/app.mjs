import express from 'express'

const PORT = 3000
const app = express()

const getRootHandler = (req, res) => {
  res.end('Get root route')
}

const getUsersHandler = (req, res) => {
  res.end('Get users route')
}
const postUsersHandler = (req, res) => {
  res.end('Post users route')
}

const getUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  console.log(userId)
  res.end(`User id is ${userId}`)
}

app.get('/', getRootHandler)

// ! v1
// app.get('/users', getUsersHandler)
// app.post('/users', postUsersHandler)

// ! v2
app.route('/users')
  .get(getUsersHandler)
  .post(postUsersHandler)

app.get('/users/:userId', getUserByIdHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
