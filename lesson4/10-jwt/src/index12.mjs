import jwt from 'jsonwebtoken'
import { log, logColored } from './utils/helpers.mjs'

async function signToken(payload, secretKey, options) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretKey, options, (err, token) => {
      if (err) {
        reject(err)
      } else {
        resolve(token)
      }
    })
  })
}

async function verifyToken(token, secretKey, verifyOptions) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, verifyOptions, (err, decoded) => {
      if (err) {
        reject(err)
      } else {
        resolve(decoded)
      }
    })
  })
}

async function main() {
  const secretKey = '123'
  const payload = { name: 'John', age: 25 }
  const options = { algorithm: 'HS512', expiresIn: '3s', audience: 'http://localhost:3000', issuer: 'MyApp' }
  const verifyOptions = { audience: /localhost:3000/, issuer: 'MyApp' }

  try {
    const token = await signToken(payload, secretKey, options)
    logColored('Token:', 'red', token)

    const decodedPayload = await verifyToken(token, secretKey, verifyOptions)
    logColored('Decoded payload:', 'blue', decodedPayload)
  } catch (err) {
    log(`${err.name}: ${err.message}`, 'bgRedBright')
  }
}

main()
