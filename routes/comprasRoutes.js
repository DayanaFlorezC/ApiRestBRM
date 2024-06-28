const express = require('express');
const router = express.Router();
const comprasController = require('../controllers/comprasController');
const authFuction = require('../middlewares/auth')

// Rutas para productos
router.post('/compras', authFuction, comprasController.createCompra);
router.get('/compras/:id', authFuction, comprasController.getCompraById);
router.get('/compras', authFuction, comprasController.getAllCompras);
router.get('/comprasBatch', authFuction, comprasController.getComprasBatch);
router.get('/compras/user/:userId', authFuction, comprasController.getComprasByUser);


module.exports = router;

