const express = require('express');

const router = express.Router();
const { userController } = require('../controllers');

// Crear un nuevo usuario
router.post('/', userController.createUser);

module.exports = router;
