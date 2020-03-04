const knex = require("knex");
// change development to production for heroku
const configOptions = require("../knexfile").development;
module.exports = knex(configOptions);
