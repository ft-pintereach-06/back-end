
exports.up = function(knex) {
    return knex.schema

    .createTable('users', table => {
        table.increments();
        table.text('username', 255).notNullable().unique();
        table.text('password', 255).notNullable();
    })
    .createTable('boards', table => {
        table.increments('board_id');
        table.text('name', 255).notNullable().unique();
    })
    .createTable('articles', table => {
        table.increments('article_id')
        table.text('title', 255).notNullable()
        table.text('url').notNullable()
        table.text('category', 128)
        table.integer('rank')
        table.integer('board_id')
            .unsigned()
            .notNullable()
            .references('board_id')
            .inTable('boards')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('categories', table => {
        table.increments('category_id')
        table.text('name', 255).notNullable().unique()
        table.integer('article_id')
            .unsigned()
            .notNullable()
            .references('article_id')
            .inTable('articles')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('categories')
    .dropTableIfExists('articles')
    .dropTableIfExists('boards')
    .dropTableIfExists('users')
};
