const categories = [
  { category_name: 'Health' },
  { category_name: 'COVID-19' },
  { category_name: 'Zoology' },
  { category_name: 'Biology' },
  { category_name: 'Chemistry' },
]

exports.categories = categories

exports.seed = function(knex) {
  return knex('categories').insert(categories)
}
