const _knex = require('../../lib/knex');

module.exports = function findAll(callback) {
  _knex('product')
    .select('*')
    .asCallback(callback);
};