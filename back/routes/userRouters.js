const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// importando middleware de validación
const { checkValidationResult } = require('../middleware/validation.middleware');
const loginValidations = require('../middleware/login.validation.middleware');

// crear un usuario (falta AUTH)
router.post('/create', userController.createAUser);

/* obtener un usuario (falta AUTH) */
router.get('/:userId', userController.getUser);

/* autentificarse */
router.post('/login', loginValidations, checkValidationResult, userController.logIn);

/* obtener todos los usuarios (falta AUTH) */
router.get('/', userController.getAllUsers);

/* modificar usuario (falta AUTH) */
router.put('/:userId', userController.modifyUser);

/* eliminar usuario (falta AUTH) */
router.delete('/:userId', userController.deleteAUser);

module.exports = router;
