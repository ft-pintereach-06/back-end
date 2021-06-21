const articles = require('./articles-model')
const db = require('../../data/dbConfig')

const checkPayload = (req, res, next) => {
    const { article_title, article_url, board_id} = req.body

    if(!article_title || article_title.trim() === '') {
        return next({status: 400, message: 'article title is missing'})
    } else if (!article_url || article_url.trim() === '') {
        return next({status: 400, message: 'article url is missing'})
    } else if (!board_id) {
        return next({status: 400, message: 'board_id is missing'})
    } else {
        next()
    }
}

const checkArticleId = async (req, res, next) => {
  const { article_id } = req.params

  try {
    // const article = await articles.findById(article_id)
    const article = await db('articles').where('article_id', article_id).first()
    if(!article) {
      next({status: 404, message: `article with article_id ${article_id} not found`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = { checkPayload, checkArticleId }