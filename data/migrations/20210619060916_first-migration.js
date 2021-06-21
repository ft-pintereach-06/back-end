
exports.up = function(knex) {
    return knex.schema

    .createTable('users', table => {
        table.increments('user_id');
        table.text('username', 255).notNullable().unique();
        table.text('password', 255).notNullable();
    })
    .createTable('boards', table => {
        table.increments('board_id');
        table.text('board_name', 255).notNullable().unique();
    })
    .createTable('categories', table => {
        table.increments('category_id')
        table.text('category_name', 255).notNullable().unique()
    })
    .createTable('articles', table => {
        table.increments('article_id')
        table.text('article_title', 255).notNullable()
        table.text('article_url').notNullable()
        table.integer('article_rank')
        table.integer('board_id')
            .unsigned()
            .notNullable()
            .references('board_id')
            .inTable('boards')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        table.text('category_name')
            .unsigned()
            // .notNullable()
            .references('category_name')
            .inTable('categories')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('articles')
    .dropTableIfExists('categories')
    .dropTableIfExists('boards')
    .dropTableIfExists('users')
};
