const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.post('/user-register', userController.createUser);
router.post('/login', userController.login);
router.put('/estado-vendedor/:id', userController.cambiarEstadoVendedorUser);

module.exports = router;