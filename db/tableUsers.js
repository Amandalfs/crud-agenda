const knex = require('knex')
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development)

function up(){
  db.schema.createTable("users", function (tabela) {
      tabela.increments("id_user").primary();
      tabela.text("name").notNull();
      tabela.text("email").notNull();
      tabela.text("senha").notNull();
   }).then(function () {
     console.log('Tabela "users" criada com sucesso!');
   }).catch(function (error) {
     console.error('Erro ao criar tabela "users": ', error);
   })
}

function down(){
  db.schema.dropTable('users', function(){

  })
}
