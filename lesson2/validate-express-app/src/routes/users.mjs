import { Router } from 'express'
import {
  deleteUserByIdHandler,
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler
} from '../controllers/users.mjs'
import { validateUserPost, validateUserPut } from '../validators/userValidation.mjs'

const usersRouter = Router()

usersRouter.route('/')
  .get(getUsersHandler)
  .post(validateUserPost, postUsersHandler)

usersRouter.route('/:userId')
  .get(getUserByIdHandler)
  .delete(deleteUserByIdHandler)
  .put(validateUserPut, putUserByIdHandler)

export default usersRouter
