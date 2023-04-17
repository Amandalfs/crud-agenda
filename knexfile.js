const { config } = require('dotenv')
const knex = require('knex')

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db/database.sqlite3'
      }
    },
    production: {
      client: 'postgreSQL',
      connection: process.env.PG_CONNECTION_STRING
    }
  }
  