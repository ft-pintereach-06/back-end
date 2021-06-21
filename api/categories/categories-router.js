const router = require('express').Router();
const Categories = require('./categories-model');

router.get('/', (req, res, next) => {
  Categories.getAll()
  .then(category => {
    res.status(200).json(category)
  })
  .catch(next)
});

router.get('/:id', (req, res, next) => {
  const { id } = req.params
  Categories.getById(id)
  .then(category => {
    res.status(200).json(category)
  })
  .catch(next)
});

router.post('/', (req, res, next) => {
  const category = req.body

  Categories.add(category)
    .then(category => {
      res.status(201).json(category)
    })
    .catch(next)
})

router.put('/:id', async (req, res, next) => {
  await Categories.updateById(req.params.id, req.body)
  .then(category => {
    res.status(200).json(category)
  })
  .catch(next)
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await Categories.deleteById(id)
  .then(category => {
    res.status(200).json(category)
  })
  .catch(next)
})


module.exports = router;