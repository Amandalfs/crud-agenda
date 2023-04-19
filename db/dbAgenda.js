const { config } = require('dotenv');
const knex = require('knex')
config()

const environment =  process.env.Node_Config || "development"
const knexConfig = require('../knexfile')[environment]

const db = knex(knexConfig);

module.exports = {
  getContatos() {
    return db('agenda')
  },

  getContatosById_user(id_user) {
    return db('agenda').where(id_user).select()
  },

  getContatosById_agenda(id_agenda){
    return db('agenda').where(id_agenda).select()
  },

  createContato(contato) {
    return db('agenda').insert(contato)
  },

  updateContato(id_agenda, dadosContato) {
    return db('agenda').where(id_agenda).update(dadosContato)
  },

  deleteContato(id_agenda) {
    return db('agenda').where(id_agenda).del()
  }
}
