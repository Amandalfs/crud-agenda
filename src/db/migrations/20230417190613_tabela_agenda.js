/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.createTable("agenda", function (tabela) {
        tabela.increments("id_agenda").primary();
        tabela.text("id_user").notNull();
        tabela.text("name").notNull();
        tabela.text("email").notNull();
        tabela.text("telefone").notNull();
     }).then(function () {
       console.log('Tabela "agenda" criada com sucesso!');
     }).catch(function (error) {
       console.error('Erro ao criar tabela "agenda": ', error);
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('agenda', function(){

    })
};
