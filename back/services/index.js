const orgService = require('./organizacion');
const userService = require('./usuario');
const productService = require('./producto');
const voluntariadoService = require('./voluntariado');
const usuarioEnVoluntariadoService = require('./usuarioEnVoluntariado');
const canjeService = require('./canje');

module.exports = {
  orgService,
  userService,
  productService,
  voluntariadoService,
  usuarioEnVoluntariadoService,
  canjeService
};
