// users
const getUsersHandler = (req, res) => {
  res.end('Get users route')
}
const postUsersHandler = (req, res) => {
  res.end('Post users route')
}

// users/:userId
const getUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Get user by Id route: ${userId}`)
}
const deleteUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Delete user by Id route: ${userId}`)
}
const putUserByIdHandler = (req, res) => {
  const userId = req.params['userId']
  res.end(`Put user by Id route: ${userId}`)
}

export {
  getUsersHandler,
  postUsersHandler,
  getUserByIdHandler,
  deleteUserByIdHandler,
  putUserByIdHandler
}
