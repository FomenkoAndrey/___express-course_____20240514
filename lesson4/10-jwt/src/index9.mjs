import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const options = {
  algorithm: 'HS512',
  expiresIn: '0s',
  audience: 'http://localhost:3000'
}

const verifyOptions = {
  audience: /localhost:3000/
}

const token = jwt.sign(payload, secretKey, options)
logColored('Token:', 'red', token)

try {
  const decodedPayload = jwt.decode(token)
  logColored('Decoded payload:', 'blue', decodedPayload)
} catch (err) {
  log(`${err.name}: ${err.message}`, 'bgRedBright')
}
