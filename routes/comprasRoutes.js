const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Rutas para productos
router.post('/compras', productController.createProduct);
router.get('/compras/:id', productController.getProductById);
router.get('/compras', productController.getAllProducts);
router.get('/compras/batch', productController.getProductsBatch);
router.put('/compras', productController.updateProducts);
router.delete('/compras', productController.deleteProducts);

module.exports = router;

