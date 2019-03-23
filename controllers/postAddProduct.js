module.exports = function postAddProduct(req, res, next) {
    const axios = require('axios')
    const each = require('async/each')

    let refs = req.body.ref.split(',')
    let i = 0

    refs = refs.map((ref) => parseInt(ref, 10))

    const addProductOnDb = require('./functions/addProductOnDb.js')

    each(refs, addProductOnDb, (err) => {
        if (err)
            errorProduct(res, err)
        else {
            console.log('dewfewfwefewg')
            const getProducts = require('./getProducts.js')
            getProducts(res)
        }
    })

    // refs.forEach((ref, index, array) => {
    //     i++
    //     if(i === array.length)
    //         redirectProductsPage()

    //     axios.get(`http://ctsearch-test.pdb-v2-front-test-natpub.pdb.lbn.fr/search-api/v2?mapping=pdb.product&ids=${parseInt(ref, 10)}_1`, {
    //         headers: { 'Content-Type' : 'application/json' }
    //     })
    //     .then(({data}) => {
    //         if (!data.hits.hits[0]) {
    //             console.log('Cette reference n\'existe pas')
    //             res.end()
    //         }
    //         const product = data.hits.hits[0]._source
    //         const addProduct = require('../models/product/addProduct.js')
    //         addProduct(parseInt(product.product_uid, 10), product.label, parseFloat(product.price), product.brand)
    //     })
    //     .catch(err => {
    //         console.log(err.message)
    //     })
    // })
}