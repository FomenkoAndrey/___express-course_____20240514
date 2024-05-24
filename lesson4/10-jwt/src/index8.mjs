import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const options = {
  algorithm: 'HS512',
  expiresIn: '3s',
  audience: 'http://localhost:3000'
}

const verifyOptions = {
  audience: /localhost:3000/ // ! пробуємо замінити на /localhost:3001
}

const token = jwt.sign(payload, secretKey, options)
logColored('Token:', 'red', token)

try {
  const decodedPayload = jwt.verify(token, secretKey, verifyOptions)
  logColored('Decoded payload:', 'blue', decodedPayload)
} catch (err) {
  log(`${err.name}: ${err.message}`, 'bgRedBright')
}
