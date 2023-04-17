/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    knex.schema.createTable("users", function (tabela) {
        tabela.increments("id_user").primary();
        tabela.text("name").notNull();
        tabela.text("email").notNull();
        tabela.text("senha").notNull();
     }).then(function () {
       console.log('Tabela "users" criada com sucesso!');
     }).catch(function (error) {
       console.error('Erro ao criar tabela "users": ', error);
     })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    knex.schema.dropTable('users')
    .then(console.log("tabela excluida"))
};
