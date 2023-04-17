const { config } = require('dotenv')
const knex = require('knex')

module.exports = {
    development: {
      client: 'sqlite3',
      connection: {
        filename: './db/database.sqlite3'
      },
      useNullAsDefault: true,
      migrations: {
        tableName: 'migrations',
        directory: './db/migrations'
      }
    },
    production: {
      client: 'postgreSQL',
      connection: process.env.PG_CONNECTION_STRING,
      useNullAsDefault: true,
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'migrations',
        directory: './db/migrations'
      }
    }
  }
  