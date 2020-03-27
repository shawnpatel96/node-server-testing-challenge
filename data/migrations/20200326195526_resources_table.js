exports.up = function(knex) {
    return knex.schema.createTable('resources', tbl=>{
        tbl.increments();
        tbl.string('name', 255).notNullable().unique().index();
        tbl.integer('quantity').notNullable()
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('products')
  };