import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const token = jwt.sign(payload, secretKey)
logColored('Token:', 'red', token)

const decodedPayload = jwt.verify(token, secretKey)
logColored('Decoded payload:', 'blue', decodedPayload)

try {
  const fakeToken =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MjUsImlhdCI6MTcwMzQ5MDYxOH0._a3nO8W_ahbkfeL3MD8ATT4idYzDdxCIGKI700UM55c123'
  const wrongPayload = jwt.verify(fakeToken, secretKey)
  logColored('Wrong Payload:', 'bgRed', decodedPayload)
} catch (err) {
  log(err.message, 'bgRedBright')
}
