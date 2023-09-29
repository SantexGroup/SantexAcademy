const orgProvider = require('./organizacion');
const productProvider = require('./producto');
const userProvider = require('./usuario');
const voluntariadoProvider = require('./voluntariado');
const usuarioEnVoluntariadoProvider = require('./usuarioEnVoluntariado');
const canjeProvider = require('./canje');

module.exports = {
  orgProvider,
  userProvider,
  productProvider,
  voluntariadoProvider,
  usuarioEnVoluntariadoProvider,
  canjeProvider
};
