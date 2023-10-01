const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

// registro de ususario
router.post('/register', userController.createUser);

// login
router.post('/login', userController.login);

// obtener por id
router.get('/:id', userController.getUserById);

// editar usuario
// router.put('/edit/:id', userController.editUser);

// cambiar estado vendedor
router.put('/estado-vendedor/:id', userController.cambiarEstadoVendedorUser);

module.exports = router;
