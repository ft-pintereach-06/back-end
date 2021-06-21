const router = require('express').Router();
const Articles = require('./articles-model');
const md = require('./articles-middleware')

router.get('/', (req, res, next) => {
  Articles.getAll()
  .then(articles => {
    res.status(200).json(articles)
  })
  .catch(next)
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params

  await Articles.getById(id)
  .then(article => {
    res.status(200).json(article)
  })
  .catch(next)
});

router.post('/', async (req, res, next) => {
  const body = req.body

  await Articles.add(body)
  .then(article => {
    res.status(201).json(article)
  })
  .catch(next)
})

router.put('/:id', async (req, res, next) => {
  await Articles.updateById(req.params.id, req.body)
  .then(article => {
    res.status(200).json(article)
  })
  .catch(next)
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await Articles.deleteById(id)
  .then(article => {
    res.status(200).json(article)
  })
  .catch(next)
})

module.exports = router;