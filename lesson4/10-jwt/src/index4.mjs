import jwt from 'jsonwebtoken'
import { logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const options = {
  algorithm: 'HS512' // hs256, hs384, hs512
}

const token = jwt.sign(payload, secretKey, options)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)
