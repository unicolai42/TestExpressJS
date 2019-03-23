const _knex = require('../../lib/knex');

module.exports = function addProduct(uid, label, price, brand) {
    _knex('product')
        .insert({uid: uid, label: label, price: price, brand: brand})
        .asCallback((err, res) => {
            if (err)
                console.log(err);
        })
}