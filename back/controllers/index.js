const catalogoController = require('./catalogo');
const orgController = require('./organizacion');
const userController = require('./usuario');
const recompensaController = require('./recompensa');
const vacanteController = require('./vacante');
const voluntariadoController = require('./voluntariado');
const usuarioEnVoluntariadoController = require('./usuarioEnVoluntariado');

module.exports = {
  catalogoController,
  orgController,
  userController,
  recompensaController,
  vacanteController,
  voluntariadoController,
  usuarioEnVoluntariadoController,
};
