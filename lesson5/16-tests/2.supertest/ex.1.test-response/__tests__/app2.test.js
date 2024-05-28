const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('GET method should respond with status 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })

  test('GET method should return correct body', async () => {
    const response = await request(app).get('/')
    expect(response.text).toBe('Hello, world!')
  })
})
