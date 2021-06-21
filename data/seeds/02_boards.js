const boards = [
  { name: 'Medical' },
  { name: 'Biology' },
  { name: 'Chemistry' },
]

exports.boards = boards

exports.seed = function(knex) {
  return knex('boards').insert(boards)
}
