
const user_articles = [
    { user_id: 1, article_id: 1 },
    { user_id: 1, article_id: 2 },
    { user_id: 1, article_id: 3 },
    { user_id: 1, article_id: 4 },
    { user_id: 2, article_id: 5 },
    { user_id: 2, article_id: 6 },
  ]

exports.seed = function(knex) {
  return knex('user_articles').insert(user_articles);
};
