// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/techprojects.db3'
    }, 
    pool: {
      afterCreate: (conn,done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
    migrations: {
      directory: '/database/migrations'
    }, 
    seeds: {
      directory: './database/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: '34.122.62.232',
      port: 5432, 
      database: 'techprojects',
      user:     'vanman9599',
      password: 'Canopy-9m-ok'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host: '34.122.62.232',
      port: 5432, 
      database: 'techprojects',
      user:     'vanman9599',
      password: 'Canopy-9m-ok'
    }},
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
