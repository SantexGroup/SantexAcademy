const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();

router.post('/user-register', userController.createUser);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);
router.put('/edit/:id', userController.editUser);
router.put('/estado-vendedor/:id', userController.cambiarEstadoVendedorUser);
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;
