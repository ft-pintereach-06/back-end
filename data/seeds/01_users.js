const users = [
  { username: 'Primary', password: '$2a$08$V3mbjL8qmSjxU0vDx.bZkeOwG9LzvV21e2PrbKUztP/usZU1KqASS' },
  { username: 'Secondary', password: '$2a$08$V3mbjL8qmSjxU0vDx.bZkeOwG9LzvV21e2PrbKUztP/usZU1KqASS' },
]

exports.users = users

exports.seed = function(knex) {
  return knex('users').insert(users)
}