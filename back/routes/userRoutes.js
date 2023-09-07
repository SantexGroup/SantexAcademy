const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

router.get('obtener-todos', userController.getAllUsers);
router.get('/obtener-por-id/:id', userController.getUserById);
router.post('/crear', userController.createUser);
router.put('/editar/:id', userController.editUser);
router.delete('/eliminar/:id', userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
