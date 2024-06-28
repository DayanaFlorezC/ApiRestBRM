const express = require('express');
const router = express.Router();
const ordenesController = require('../controllers/ordenesController');
const authFuction = require('../middlewares/auth')


// Rutas para ordenes

router.post('/ordenes', authFuction, ordenesController.createOrden);
router.get('/ordenes/:compraId', authFuction, ordenesController.getOrdenesByCompra);
router.get('/ordenes', authFuction, ordenesController.getAllOrdenes);
router.delete('/ordenes/:id', authFuction, ordenesController.deleteOrden);
