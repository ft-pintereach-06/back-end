const categories = [
  { name: 'Health' },
  { name: 'COVID-19' },
  { name: 'Zoology' },
  { name: 'Biology' },
  { name: 'Chemistry' },
]

exports.categories = categories

exports.seed = function(knex) {
  return knex('categories').insert(categories)
}
