const articles = require('./articles-model')
const db = require('../../data/dbConfig')

const checkPayload = (req, res, next) => {
    const { title, url, board_id} = req.body

    if(!title || title.trim() === '') {
        return next({status: 400, message: 'title is missing'})
    } else if (!url || url.trim() === '') {
        return next({status: 400, message: 'url is missing'})
    } else if (!board_id) {
        return next({status: 400, message: 'board_id is missing'})
    } else {
        next()
    }
}

module.exports = { checkPayload }