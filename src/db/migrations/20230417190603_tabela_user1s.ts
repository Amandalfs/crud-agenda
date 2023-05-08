/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import knex, { Knex } from "knex";


exports.up = function(knex:Knex) {
    knex.schema.createTable("users", function (tabela) {
        tabela.increments("id_user").primary();
        tabela.text("name").notNullable();
        tabela.text("email").notNullable();
        tabela.text("senha").notNullable();
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
exports.down = function(knex:Knex) {
    knex.schema.dropTable('users')
    .then(()=>{
      console.log("tabela excluida");
    })
};
