// const categories = require('./categories-model')
// const db = require('../../data/dbConfig')

// const checkPayload = (req, res, next) => {
//     const { category_name } = req.body

//     if(!category_name || category_name.trim() === '') {
//         return next({status: 400, message: 'category name is missing'})
//     } else {
//         next()
//     }
// }

// const checkCategoryId = async (req, res, next) => {
//   const { category_id } = req.params

//   try {
//     // const category = await categories.findById(category_id)
//     const category = await db('categories').where('category_id', category_id).first()
//     if(!category) {
//       next({status: 404, message: `category with category_id ${category_id} not found`})
//     } else {
//       next()
//     }
//   } catch (err) {
//     next(err)
//   }
// }

// module.exports = { checkPayload, checkCategoryId }