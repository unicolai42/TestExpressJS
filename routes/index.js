const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', require('../controllers/getHomepage.js'));
router.get('/product-list', require('../controllers/getProducts.js'));
router.post('/add-product', require('../controllers/postAddProduct.js'));
router.get('/error', require('../controllers/getErrorProduct.js'));

module.exports = router;