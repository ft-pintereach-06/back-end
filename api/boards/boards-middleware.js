const boards = require('./boards-model')
const db = require('../../data/dbConfig')

const checkPayload = (req, res, next) => {
    const { board_name } = req.body

    if(!board_name || board_name.trim() === '') {
        return next({status: 400, message: 'board name is missing'})
    } else {
        next()
    }
}

const checkBoardId = async (req, res, next) => {
  const { id } = req.params

  try {
    // const board = await boards.findById(board_id)
    const board = await db('boards').where('board_id', id).first()
    if(!board) {
      next({status: 404, message: `board with board_id ${id} not found`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { checkPayload, checkBoardId }