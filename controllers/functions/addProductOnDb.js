module.exports = function addProductOnDb(ref, callback) {
    const cookieSession = require('cookie-session')
    const axios = require('axios')

    console.log(ref, 'ddd')
    axios.get(`http://ctsearch-test.pdb-v2-front-test-natpub.pdb.lbn.fr/search-api/v2?mapping=pdb.product&ids=${parseInt(ref, 10)}_1`, {
        headers: { 'Content-Type' : 'application/json' }
    })
    .then(({data}) => {
        if (!data.hits.hits[0]) {
            console.log('Cette reference n\'existe pas')

        }
        else {
            const product = data.hits.hits[0]._source
            const addProduct = require('../../models/product/addProduct.js')
            addProduct(parseInt(product.product_uid, 10), product.label, parseFloat(product.price), product.brand)
        }
        callback()
    })
    .catch(err => {
        console.log(err.message, 'lllll')
    })
}