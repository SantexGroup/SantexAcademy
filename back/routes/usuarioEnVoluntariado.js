const express = require('express');

const usuarioEnVoluntariadoRouter = express.Router();
const { usuarioEnVoluntariadoController } = require('../controllers');

usuarioEnVoluntariadoRouter.post('/', usuarioEnVoluntariadoController.join);

module.exports = { usuarioEnVoluntariadoRouter };
