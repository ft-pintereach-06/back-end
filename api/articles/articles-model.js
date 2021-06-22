const db = require('../../data/dbConfig.js');

const getAll = async () => {
  return db('articles')
}

const getById = async (id) => {
  return await db('articles').where('article_id', id).first()
}

const getMyArticles = async (id) => {
  return await db('articles as a')
  .join('user_articles as ua', 'ua.article_id', 'a.article_id')
  .where('ua.user_id', id)
}

const add = async (article, user_id) => {
  const newArticle = await db('articles').insert(article, ['article_id'])
  const { article_id } = newArticle[0]
  const test = {user_id: user_id, article_id: article_id}
  await db('user_articles').insert(test, ['user_article_id'])
  return getById(article_id)
}

// const updateById = async (id, article) => {
//   await db('articles').where('article_id', id).update(article)
//   return getById(id)
// }

const deleteById = async (id) => {
  const article = await getById(id)
  await db('articles').where('article_id', id).del()
  await db('user_articles').where('article_id', id).del()
  return article
}

module.exports = { getAll, getById, add, deleteById, getMyArticles }