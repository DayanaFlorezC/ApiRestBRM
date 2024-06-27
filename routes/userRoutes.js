const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas para usuarios
router.post('/users', userController.createUser);
router.post('/users/login', userController.LoginUser);
router.get('/users/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.put('/users', userController.updateUser)

module.exports = router;
