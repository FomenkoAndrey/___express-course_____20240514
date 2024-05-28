const app = require('./app')
const { getMockReq, getMockRes } = require('@jest-mock/express')

test('GET /hello', () => {
  const req = getMockReq({ method: 'GET', url: '/hello' })
  const { res } = getMockRes()

  app(req, res)

  expect(res.send).toHaveBeenCalledWith('Hello, world!')
})
