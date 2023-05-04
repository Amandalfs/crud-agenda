const { config } = require('dotenv');
config();

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
      client: 'pg',
      connection: process.env.PG_CONNECTION_STRING,
      useNullAsDefault: true,
      migrations: {
        tableName: 'migrations',
        directory: './db/migrations'
      },
      searchPath: ['knex', 'public']
    }
  }
  