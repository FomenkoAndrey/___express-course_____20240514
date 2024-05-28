import { Router } from 'express'

const router = Router()

router.get('/api', (req, res) => {
  res.send('Запит GET успішно оброблено')
})

router.post('/api', (req, res) => {
  res.send('Запит POST успішно оброблено')
})

router.put('/api', (req, res) => {
  res.send('Запит PUT успішно оброблено')
})

router.delete('/api', (req, res) => {
  res.send('Запит DELETE успішно оброблено')
})

export default router
