const request = require('supertest')
const app = require('../app')

describe('Test the root path', () => {
  test('GET method should retrieve initial data', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(Array.isArray(response.body)).toBeTruthy()
  })

  test('POST method should add new data', async () => {
    const newData = { message: 'Нове повідомлення' }
    const postResponse = await request(app).post('/').send(newData)
    expect(postResponse.statusCode).toBe(201)
    expect(postResponse.body).toMatchObject(newData)

    const getResponse = await request(app).get('/')
    expect(getResponse.body.length).toBeGreaterThan(0)
    expect(getResponse.body).toContainEqual(expect.objectContaining(newData))
  })
})
