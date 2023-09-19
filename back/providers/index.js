const catalogoProvider = require('./catalogo');
const orgProvider = require('./organizacion');
const recompensaProvider = require('./recompensa');
const userProvider = require('./usuario');
const vacanteProvider = require('./vacante');
const voluntariadoProvider = require('./voluntariado');
const usuarioEnVoluntariadoProvider = require('./usuarioEnVoluntariado');

module.exports = {
  catalogoProvider,
  orgProvider,
  userProvider,
  recompensaProvider,
  vacanteProvider,
  voluntariadoProvider,
  usuarioEnVoluntariadoProvider,
};
