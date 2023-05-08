/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

import knex, { Knex } from "knex";

exports.up = function(knex:Knex) {
    knex.schema.createTable("agenda", function (tabela) {
        tabela.increments("id_agenda").primary();
        tabela.text("id_user").references('id_user').inTable('users');
        tabela.text("name").notNullable();
        tabela.text("email").notNullable();
        tabela.text("telefone").notNullable();
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
exports.down = function(knex:Knex) {
    knex.schema.dropTable('agenda').then(()=>{
      console.log("tabela Excluida");
    })
}
