const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');
//Creat new product

router.post('/products', productController.creatProduct);

module.exports = router;