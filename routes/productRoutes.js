const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authFuction = require('../middlewares/auth')


// Rutas para productos
router.post('/products', authFuction, productController.createProduct);
router.get('/products/:id', authFuction, productController.getProductById);
router.get('/products', authFuction, productController.getAllProducts);
router.get('/productsBatch', authFuction, productController.getProductsBatch);
router.put('/products/:id', authFuction, productController.updateProducts);
router.delete('/products/:id', authFuction, productController.deleteProducts);

module.exports = router;

