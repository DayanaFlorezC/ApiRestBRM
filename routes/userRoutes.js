const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authFuction = require('../middlewares/auth')

// Rutas para usuarios
router.post('/users', userController.createUser);
router.post('/users/login', userController.LoginUser);
router.get('/users/:id', authFuction,  userController.getUserById);
router.get('/users', authFuction, userController.getAllUsers);
router.put('/users', authFuction, userController.updateUser)

module.exports = router;
