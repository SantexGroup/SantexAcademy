const express = require('express');
const { check } = require('express-validator');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.allUser);
router.get('/renew', userController.revalidarToken);
router.get('/:id', userController.getUser);
router.post('/', [
  check('username', 'El username es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña de mínimo 8 caracteres es obligatoria').isLength({ min: 8 }),
], userController.createUser);
router.post('/login', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña de mínimo 8 caracteres es obligatoria').isLength({ min: 8 }),
], userController.login);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
