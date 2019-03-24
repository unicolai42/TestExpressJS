module.exports = function postAddProduct(req, res, next) {
    const each = require('async/each')
    const axios = require('axios')

    let refs = req.body.ref.split(',')
    let i = 0

    req.session.refFail = []

    refs = refs.map((ref) => {
        if (parseInt(ref, 10))
            return parseInt(ref, 10)
        else {
            req.session.refFail.push(ref)
            return null
        }
    })
    refs = refs.filter((ref) => ref !== null)

    each(refs, (ref, callback) => {
        console.log(ref, 'ddd')
        axios.get(`http://ctsearch-test.pdb-v2-front-test-natpub.pdb.lbn.fr/search-api/v2?mapping=pdb.product&ids=${ref}_1`, {
            headers: { 'Content-Type' : 'application/json' }
        })
        .then(({data}) => {
            if (!data.hits.hits[0]) {
                console.log(ref, 'Cette reference n\'existe pas')
                req.session.refFail.push(ref)
            }
            else {
                const product = data.hits.hits[0]._source
                const addProduct = require('../models/product/addProduct.js')
                addProduct(parseInt(product.product_uid, 10), product.label, parseFloat(product.price), product.brand)
            }
            callback()
        })
        .catch(err => {
            callback(err)
        })
    }, (err) => {
        if (err)
            next(err)
        else {
            console.log(req.session.refFail, '2')
            const getProducts = require('./getProducts.js')
            getProducts(req, res)
        }
    })
}

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