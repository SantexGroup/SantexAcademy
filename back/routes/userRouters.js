const express = require('express');

const router = express.Router();
const userController = require('../controllers/userController');

// crear un usuario (falta AUTH)
router.post('/register', userController.createAUser);

/* obtener un usuario (falta AUTH) */
router.get('/:email', userController.getUser);

/* autentificarse */
router.post('/login', userController.logIn);

/* ingreso a la pagina (falta AUTH)
router.post('/welcome');
?? */

/* obtener todos los usuarios (falta AUTH) */
router.get('/', userController.getAllUsers);

/* modificar usuario (falta AUTH) */
router.put('/:email', userController.modifyUser);

/* eliminar usuario (falta AUTH) */
router.delete('/unsuscribe/:email', userController.deleteAUser);

module.exports = router;
