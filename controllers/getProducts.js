module.exports = function getProducts(res) {
    const allProducts = require('../models/product/findAll.js')

    console.log('oknbjhbhjb')
    allProducts((err, products) => {
      res.render('product-list', {products: products})
    })
};