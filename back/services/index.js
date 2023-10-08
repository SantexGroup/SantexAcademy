const orgService = require('./organizacion');
const recoveryService = require('./recoveryPass');
const userService = require('./usuario');
const productService = require('./producto');
const voluntariadoService = require('./voluntariado');
const usuarioEnVoluntariadoService = require('./usuarioEnVoluntariado');
const canjeService = require('./canje');

module.exports = {
  orgService,
  recoveryService,
  userService,
  productService,
  voluntariadoService,
  usuarioEnVoluntariadoService,
  canjeService
};
