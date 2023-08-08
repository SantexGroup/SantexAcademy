const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// crear un usuario
router.post('/register', userController.createAUser);

/* ingresar a la app */
router.post('/login', userController.logIn);

/* obtener un usuario */
router.get('/:userId', userController.getUser);

/* obtener todos los usuarios */
router.get('/', userController.getAllUsers);

/* modificar usuario */
router.put('/:userId', userController.modifyUser);

/* eliminar usuario */
router.delete('/unsuscribe/:userId', userController.deleteUser);

module.exports = router;
