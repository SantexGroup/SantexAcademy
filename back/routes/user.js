const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Obtener un usuario por Id
router.get('/:id', userController.getUserById);

// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Eliminar un usuario por Id
router.delete('/:id', userController.deleteUser);

// Actualizar un usuario por Id
router.put('/:id', userController.updateUser);

module.exports = router;
