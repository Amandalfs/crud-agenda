import { config } from "dotenv";
config();

interface KnexConfig {
  [key: string]: object;
};

export const configs:KnexConfig =  {
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
  