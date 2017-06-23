module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/express_boilerplate',
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/test'
    }
  },
  development: {
    client: 'pg',
    connection: 'postgres://localhost/express_boilerplate_test',
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/development'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/db/migrations'
    },
    seeds: {
      directory: __dirname + '/src/db/seeds/production'
    }
  }
};
