const getEntity = async (req, res) => {
  res.json({ id: req.params.id, name: 'Test Entity' })
}

const createEntity = async (req, res) => {
  res.status(201).send('Entity created')
}

module.exports = { getEntity, createEntity }
