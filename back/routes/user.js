const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');

// Crear un nuevo usuario
router.post('/', userController.createUser);

// Obtener un usuario por Id
router.get('/:id', userController.getUserById);

module.exports = router;
