const express = require('express');

const router = express.Router();
const { verificarUsuario } = require('../controllers/verificarUsuario');

router.post('/', verificarUsuario);

module.exports = router;
