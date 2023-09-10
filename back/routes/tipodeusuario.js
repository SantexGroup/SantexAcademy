const express = require('express');

const router = express.Router();
const tipoDeUsuarioController = require('../controllers/tipodeusuario');

router.get('/', tipoDeUsuarioController.allTipoDeUsuarios);

module.exports = router;
