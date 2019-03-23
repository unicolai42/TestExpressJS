module.exports = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'test_nodejs',
    timezone: 'Europe/Paris'
  },
  pool: { min: 0, max: 10 }
});
