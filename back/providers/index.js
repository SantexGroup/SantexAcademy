const orgProvider = require('./organizacion');
const productProvider = require('./producto');
const userProvider = require('./usuario');
const vacanteProvider = require('./vacante');
const voluntariadoProvider = require('./voluntariado');
const usuarioEnVoluntariadoProvider = require('./usuarioEnVoluntariado');

module.exports = {
  orgProvider,
  userProvider,
  productProvider,
  vacanteProvider,
  voluntariadoProvider,
  usuarioEnVoluntariadoProvider,
};
