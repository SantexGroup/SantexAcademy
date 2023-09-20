const express = require('express');
const { check } = require('express-validator');
const url = require('url');
const router = express.Router();

const userController = require('../controllers/user');
const { verifyLink } = require('../helpers/verifyLink');//NO borrar, no comentar, se usa solo para verificacion de link

const { validarCampos } = require('../middleware/validar-campos');
const { validarJWT } = require('../middleware/validar-jwt');

//router.get('/', userController.allUser);
//router.get('/renew', userController.revalidarToken);
//router.get('/:id', userController.getUser);

router.get('/', userController.allUser);
router.get('/renew', validarJWT, userController.revalidarToken);
router.get('/:id', userController.getUser);
router.post('/', [
  check('username', 'El username es obligatorio').not().isEmpty(),
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña de mínimo 8 caracteres es obligatoria').isLength({ min: 8 }),
  validarCampos,
], userController.createUser);
router.post('/login', [
  check('email', 'El email es obligatorio').isEmail(),
  check('password', 'La contraseña de mínimo 8 caracteres es obligatoria').isLength({ min: 8 }),
  validarCampos,
], userController.login);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

///////////-------NO borrar, no comentar, por favor no tocar, se usa solo para verificacion de link-----//////
router.post('/verifyLink', (req, res) => {
  const urlString = req.url; // Traigo la URL de la solicitud
  const parsedUrl = url.parse(urlString, true);
  const codeRegister = parsedUrl.query.codeRegister; // Extrae el codigo de la URL
  console.log(`Valor de codeRegister en routes: ${codeRegister}`);//BORRAR
  verifyLink(req, res);// Envio a funcion de control en helpers
});
///////////---------------------------------------------------------------------------------------------//////



module.exports = router;
