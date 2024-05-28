const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('GET method should respond with status 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })

  test('GET method should return an array', async () => {
    const response = await request(app).get('/')
    expect(Array.isArray(response.body)).toBeTruthy()
  })

  test('GET method should return non-empty array', async () => {
    const response = await request(app).get('/')
    expect(response.body.length).toBeGreaterThan(0)
  })

  test('Each object in the array should have id and message properties', async () => {
    const response = await request(app).get('/')
    response.body.forEach((obj) => {
      expect(obj).toHaveProperty('id')
      expect(obj).toHaveProperty('message')
    })
  })
})
