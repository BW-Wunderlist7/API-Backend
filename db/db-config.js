const knex = require("knex");
// change development to production for heroku
const configOptions = require("../knexfile").production;
module.exports = knex(configOptions);
