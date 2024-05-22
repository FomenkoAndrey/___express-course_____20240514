import jwt from 'jsonwebtoken'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const token = jwt.sign(payload, secretKey)

console.log(token)
