const catalogoProvider = require('./catalogo');
const orgProvider = require('./organizacion');
const recompensaProvider = require('./recompensa');
const userProvider = require('./usuario');
const vacanteProvider = require('./vacante');

module.exports = {
  catalogoProvider,
  orgProvider,
  userProvider,
  recompensaProvider,
  vacanteProvider
};
