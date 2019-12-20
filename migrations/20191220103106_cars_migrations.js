
exports.up = async function(knex) {
    await knex.schema.createTable('cars', table => {
        table.increments('id').primary();
        table.text('VIN', 17).unique().notNullable();
        table.text('make', 128 ).notNullable();
        table.text('model').notNullable();
        table.integer('mileage')
    });
};

exports.down = async function(knex) {
  await knex.schema.dropTable('cars')
};