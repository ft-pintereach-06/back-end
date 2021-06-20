const users = [
  { username: 'Davis', password: 'password' },
  { username: 'Cooper', password: 'password' },
  { username: 'Jackson', password: 'password' },
]

exports.users = users

exports.seed = function(knex) {
  return knex('users').insert(users)
}