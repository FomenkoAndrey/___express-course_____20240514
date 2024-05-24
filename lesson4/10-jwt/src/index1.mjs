import jwt from 'jsonwebtoken'

const secretKey = '123'

const payload = {
  name: 'John',
  age: 25
}

const token = jwt.sign(payload, secretKey)
console.log(token)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImFnZSI6MjUsImlhdCI6MTcxNjU3MTMzNH0.j7tVcCfrnJFl5NYjQYyHmj7DuqvgpTJGjZElgYmbNr0
