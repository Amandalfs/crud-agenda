const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports = {
  getContatos() {
    return db('agenda')
  },

  getContatosById_user(id_user) {
    return db('agenda').where({ id_user }).select()
  },

  createContato(contato) {
    return db('agenda').insert(contato)
  },

  updateContato(id, dadosContato) {
    return db('agenda').where(id_agenda).update(dadosContato)
  },

  deleteContato(id_contato) {
    return db('agenda').where(id_agenda).del()
  }
}
