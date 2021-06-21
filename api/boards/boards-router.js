const router = require('express').Router();
const Boards = require('./boards-model');

router.get('/', (req, res, next) => {
  Boards.getAll()
  .then(board => {
    res.status(200).json(board)
  })
  .catch(next)
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  
  await Boards.getById(id)
  .then(board => {
    res.status(200).json(board)
  })
  .catch(next)
});

router.post('/', (req, res, next) => {
  const board = req.body

  Boards.add(board)
    .then(board => {
      res.status(201).json(board)
    })
    .catch(next)
})

router.put('/:id', async (req, res, next) => {
  await Boards.updateById(req.params.id, req.body)
  .then(board => {
    res.status(200).json(board)
  })
  .catch(next)
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params
  await Boards.deleteById(id)
  .then(board => {
    res.status(200).json(board)
  })
  .catch(next)
})

module.exports = router;