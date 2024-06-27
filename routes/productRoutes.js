const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para productos
router.post('/products', productController.createProduct);
router.get('/products/:id', productController.getProductById);
router.get('/products', productController.getAllProducts);
router.get('/products/batch', productController.getProductsBatch);
router.put('/products', productController.updateProducts);
router.delete('/products', productController.deleteProducts);

module.exports = router;

