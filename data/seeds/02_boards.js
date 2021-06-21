const boards = [
  { board_name: 'Medical' },
  { board_name: 'Biology' },
  { board_name: 'Chemistry' }
]

exports.boards = boards

exports.seed = function(knex) {
  return knex('boards').insert(boards)
}
