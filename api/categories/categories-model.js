const db = require('../../data/dbConfig.js');

const getAll = async () => {
  return db('categories')
}

const getById = async (id) => {
  return db('categories').where('category_id', id).first()
}

const add = async (category) => {
  console.log(category)
  const [newCategory] = await db('categories').insert(category, 'category_id')
  console.log(newCategory)
  return getById(newCategory)
}

const updateById = async (id, category) => {
  await db('categories').where('category_id', id).update(category)
  return getById(id)
}

const deleteById = async (id) => {
  const category = await getById(id)
  await db('categories').where('category_id', id).del()
  return category
}

module.exports = { getAll, getById, add, updateById, deleteById }