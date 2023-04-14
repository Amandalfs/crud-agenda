const knex = require('knex')

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db/database.sqlite3'
      }
    },
    production: {
      client: 'sqlite3',
      connection: {
        filename: './prod.sqlite3'
      }
    }
  }
  