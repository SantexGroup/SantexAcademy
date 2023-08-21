const express = require('express');

const router = express.Router();
const { verificarUsuario } = require('../controllers');

router.post('/', verificarUsuario.verificarUsuario);

module.exports = router;
