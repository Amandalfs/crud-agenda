const knex = require('knex')
const knexConfig = require('../knexfile')

const db = knex(knexConfig.development);

module.exports = {
  getAllUsers() {
    return db('users')
  },

  getUserById(id) {
    return db('users').where({ id }).first()
  },

  createUser(user) {
    return db('users').insert(user)
  },

  updateUser(id, user) {
    return db('users').where({ id }).update(user)
  },

  deleteUser(id) {
    return db('users').where({ id }).del()
  }
}

