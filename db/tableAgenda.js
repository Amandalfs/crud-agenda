const knex = require('knex')
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development)

function up(){
  db.schema.createTable("agenda", function (tabela) {
      tabela.increments("id_agenda").primary();
      tabela.text("id_user").notNull();
      tabela.int("name").notNull();
      tabela.text("email").notNull();
      tabela.text("telefone").notNull();
   }).then(function () {
     console.log('Tabela "agenda" criada com sucesso!');
   }).catch(function (error) {
     console.error('Erro ao criar tabela "agenda": ', error);
   })
}


function down(){
  db.schema.dropTable('agenda', function(){

  })
}
