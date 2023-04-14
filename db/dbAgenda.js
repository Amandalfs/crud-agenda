const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development)

module.exports = {
  getContatos() {
    return db('agenda')
  },

  getContatosByName(user_name) {
    return db('agenda').where({ user_name }).select()
  },

  createContato(user) {
    return db('agenda').insert(user)
  },

  updateContato(id, user_name) {
    return db('agenda').where({ id_contato }).update(user_name)
  },

  deleteContato(id_contato) {
    return db('agenda').where({ id_contato }).del()
  }
}
