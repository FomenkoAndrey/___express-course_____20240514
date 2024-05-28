const app = require('./app')
const { getMockReq, getMockRes } = require('@jest-mock/express')

describe('Testing all HTTP methods for /hello route', () => {
  test('GET /hello', () => {
    const req = getMockReq({ method: 'GET', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('GET Hello, world!')
  })

  test('POST /hello', () => {
    const req = getMockReq({ method: 'POST', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('POST Hello, world!')
  })

  test('PUT /hello', () => {
    const req = getMockReq({ method: 'PUT', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('PUT Hello, world!')
  })

  test('PATCH /hello', () => {
    const req = getMockReq({ method: 'PATCH', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('PATCH Hello, world!')
  })

  test('DELETE /hello', () => {
    const req = getMockReq({ method: 'DELETE', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('DELETE Hello, world!')
  })

  test('OPTIONS /hello', () => {
    const req = getMockReq({ method: 'OPTIONS', url: '/hello' })
    const { res } = getMockRes()
    app(req, res)
    expect(res.send).toHaveBeenCalledWith('OPTIONS Hello, world!')
  })
})
