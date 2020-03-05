require("dotenv").config();
module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/todo",
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/dev"
    },
    useNullAsDefault: true
  },

  test: {
    client: "pg",
    connection: {
      host: "127.0.0.1",
      port: "8601",
      user: "postgres",
      password: "42",
      database: "todo"
    },
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/test"
    },
    useNullAsDefault: true
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds/production"
    },
    useNullAsDefault: true
  }
};
