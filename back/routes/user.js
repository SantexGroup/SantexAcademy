const express = require('express');
const { body } = require('express-validator');

const router = express.Router();
const { userController } = require('../controllers');
const { authMiddleware, authIsAdmin } = require('../middleware/authentication-jwt');

router.get('/:idUser', userController.getUser);
router.get('/', userController.getUsers);
router.post('/', [
  body('nombre', 'El nombre debe tener más de dos caracteres')
    .exists()
    .isLength({ min: 3 }),
  body('apellido', 'El apellido debe tener más de tres caracteres')
    .exists()
    .isLength({ min: 4 }),
  body('nombreusuario', 'El nombre de usuario debe tener más de siete caracteres')
    .exists()
    .isLength({ min: 8 }),
  body('contrasena', 'La contraseña debe tener al menos 8 caracteres')
    .exists()
    .isLength({ min: 8 }),
  body('email', 'email no válido')
    .exists()
    .isEmail(),
  body('role', 'Debe ingresar Admin ó encuestador')
    .exists()
    .isLength({ min: 5 }),
],
authMiddleware, authIsAdmin, userController.createUser);

router.delete('/:idUser', authMiddleware, authIsAdmin, userController.deleteUser);

router.put('/:idUser', [
  body('nombre', 'El nombre debe tener más de dos caracteres')
    .exists()
    .isLength({ min: 3 }),
  body('apellido', 'El apellido debe tener mas de tres caracteres')
    .exists()
    .isLength({ min: 4 }),
  body('nombreusuario', 'El nombre de usuario debe tener más de siete caracteres')
    .exists().isLength({ min: 8 }),
  body('contrasena', 'La contraseña debe tener al menos 8 caracteres')
    .exists()
    .isLength({ min: 8 }),
  body('email', 'email no válido')
    .exists()
    .isEmail(),
  body('role', 'Debe ingresar Admin ó encuestador')
    .exists()
    .isLength({ min: 5 }),
], authMiddleware, authIsAdmin, userController.updateUser);

module.exports = router;
