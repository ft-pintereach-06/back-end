
exports.up = function(knex) {
    return knex.schema

    .createTable('users', table => {
        table.increments('user_id');
        table.string('username', 255).notNullable().unique();
        table.string('password', 255).notNullable();
    })
    .createTable('boards', table => {
        table.increments('board_id');
        table.string('board_name', 255).notNullable().unique();
    })
    // .createTable('categories', table => {
    //     table.increments('category_id')
    //     table.string('category_name', 255).notNullable().unique()
    // })
    .createTable('articles', table => {
        table.increments('article_id')
        table.string('article_title', 255).notNullable()
        table.string('article_url', 255).notNullable()
        table.string('article_importance')
        // table.integer('board_id')
        //     .unsigned()
        //     // .notNullable()
        //     .references('board_id')
        //     .inTable('boards')
        //     .onUpdate('CASCADE')
        //     .onDelete('CASCADE')
        table.string('category')
            // .unsigned()
            // .notNullable()
            // .references('category_name')
            // .inTable('categories')
            // .onUpdate('CASCADE')
            // .onDelete('CASCADE')
    })

    .createTable('user_articles', table => {
        table.increments('user_article_id')
        table.integer('user_id')
            .unsigned()
            .notNullable()
            .references('user_id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
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
    .dropTableIfExists('user_articles')
    .dropTableIfExists('articles')
    // .dropTableIfExists('categories')
    .dropTableIfExists('boards')
    .dropTableIfExists('users')
};
