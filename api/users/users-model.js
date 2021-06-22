const db = require('../../data/dbConfig.js');

function getAll() { // Get all users
    return db('users as u')
    .select('user_id', 'username', 'password')
}

function findBy(filter) { // Find all users (used later for searching by Username)
    return db('users as u')
    .select('user_id', 'username', 'password')
    .where(filter).first()
}

const getById = async (id) => { // Find by user ID
    return await db('users').where('user_id', id).first()
}

const add = async (user) => {
  const [newUser] = await db('users').insert(user, 'user_id')
  return getById(newUser)
}

module.exports = { add, getAll, findBy, getById, };