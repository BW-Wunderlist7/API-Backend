const knex = require("knex");
// change development to production for heroku
const configOptions = require("../knexfile");
const env = process.env.NODE_ENV || "development";
module.exports = knex(configOptions[env]);
