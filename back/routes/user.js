const express = require('express');
const { check } = require('express-validator');
const url = require('url');

const router = express.Router();
const userController = require('../controllers/user');

router.get('/', userController.allUser);
router.get('/renew', userController.revalidarToken);
router.get('/:id', userController.getUser);
router.get('/user/verifyEmail', (req, res) => {
  const urlString = req.url; // Traigo la URL de la solicitud
  //console.log('URL de la solicitud:', urlString);//BORRAR
  const parsedUrl = url.parse(urlString, true);
  //console.log('URL analizada:', parsedUrl);//BORRAR
  const email = parsedUrl.query.email; // Extrae el email de la URL
  //console.log('Email recuperado de la URL:', email);//BORRAR
  userController.verifyLinkEmail(req, res, email);// Envio a función de controller.
});
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
