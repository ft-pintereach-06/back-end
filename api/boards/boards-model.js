const db = require('../../data/dbConfig.js');

const getAll = async () => {
  // DO YOUR MAGIC
  return db('cars')
}

module.exports = { getAll }