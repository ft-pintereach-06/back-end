const db = require('../../data/dbConfig.js');

const getAll = async () => {
  return db('articles')
}

const getById = async (id) => {
  return await db('articles').where('article_id', id).first()
}

const add = async (article) => {
  console.log(article)
  const [newArticle] = await db('articles').insert(article, 'article_id')
  console.log(newArticle)
  return getById(newArticle)
}

const updateById = async (id, article) => {
  await db('articles').where('article_id', id).update(article)
  return getById(id)
}

const deleteById = async (id) => {
  const article = await getById(id)
  await db('articles').where('article_id', id).del()
  return article
}

module.exports = { getAll, getById, add, updateById, deleteById }