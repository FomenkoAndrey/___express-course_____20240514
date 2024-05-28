const { getEntity, createEntity } = require('./myController')
const { getMockReq, getMockRes } = require('@jest-mock/express')

describe('MyController tests', () => {
  let req, res, clearMockRes

  beforeEach(() => {
    ;({ res, clearMockRes } = getMockRes())
    clearMockRes()
  })

  test('getEntity responds with correct entity data', async () => {
    req = getMockReq({ params: { id: '123' } })

    await getEntity(req, res)

    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        id: '123',
        name: 'Test Entity'
      })
    )
  })

  test('createEntity responds with correct status', async () => {
    req = getMockReq()

    await createEntity(req, res)

    expect(res.status).toHaveBeenCalledWith(201)
    expect(res.send).toHaveBeenCalledWith('Entity created')
  })
})
