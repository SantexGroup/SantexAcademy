const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();


// registro de usuario
router.post('/user-register', userController.createUser);

// login
router.post('/login', userController.login);

// obteenr por id
router.get('/:id', userController.getUserById);

// editar usuario
router.put('/edit/:id', userController.editUser);

// cambiar estado vendedor
router.put('/estado-vendedor/:id', userController.cambiarEstadoVendedorUser);

// eliminar usuario
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
