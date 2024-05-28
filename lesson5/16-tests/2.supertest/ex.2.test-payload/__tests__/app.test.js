const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('GET method should return an array of objects', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBeTruthy()
    expect(response.body.length).toBeGreaterThan(0)
    response.body.forEach((obj) => {
      expect(obj).toHaveProperty('id')
      expect(obj).toHaveProperty('message')
    })
  })
})
