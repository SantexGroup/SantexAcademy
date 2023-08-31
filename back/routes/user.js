const express = require('express');
const userController = require('../controllers/user-controller');
const { isAuthenticated } = require('../middleware/authentication');

const router = express.Router();

router.post('/login', userController.login);
router.get('/logout', isAuthenticated, userController.logout);
router.post('/user-register', userController.createUser);
router.post('/login', userController.login);
router.put('/estado-vendedor/:id', userController.cambiarEstadoVendedorUser);

module.exports = router;
