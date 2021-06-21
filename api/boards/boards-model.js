const db = require('../../data/dbConfig.js');

const getAll = async () => {
  return db('boards')
}

const getById = async (id) => {
  console.log(id)
  return await db('boards').where('board_id', id).first()
}

const add = async (board) => {
  console.log(board)
  const [newBoard] = await db('boards').insert(board, 'board_id')
  console.log(newBoard)
  return getById(newBoard)
}

const updateById = async (id, board) => {
  await db('boards').where('board_id', id).update(board)
  return getById(id)
}

const deleteById = async (id) => {
  const board = await getById(id)
  await db('boards').where('board_id', id).del()
  return board
}

module.exports = { getAll, getById, add, updateById, deleteById }