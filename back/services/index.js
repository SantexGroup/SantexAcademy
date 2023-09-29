const orgService = require('./organizacion');
const userService = require('./usuario');
const productService = require('./producto');
const vacanteService = require('./vacante');
const voluntariadoService = require('./voluntariado');
const usuarioEnVoluntariadoService = require('./usuarioEnVoluntariado');

module.exports = {
  orgService,
  userService,
  productService,
  vacanteService,
  voluntariadoService,
  usuarioEnVoluntariadoService,
};
