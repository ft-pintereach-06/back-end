const users = require('./users-model')
const db = require('../../data/dbConfig')

const checkUserId = async (req, res, next) => {
  const { id } = req.params

  try {
    // const user = await users.findById(user_id)
    const user = await db('users').where('user_id', id).first()
    if(!user) {
      next({status: 404, message: `user with user_id ${id} not found`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { checkPayload, checkUserId }