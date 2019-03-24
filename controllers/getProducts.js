module.exports = function getProducts(req, res) {
    const allProducts = require('../models/product/findAll.js')

    allProducts((err, products) => {
      res.render('product-list', {products: products, fail: req.session.refFail})
    })
};