const catalogoService = require('./catalogo');
const orgService = require('./organizacion');
const userService = require('./usuario');
const recompensaService = require('./recompensa');
const vacanteService = require('./vacante');
const voluntariadoService = require('./voluntariado');
const usuarioEnVoluntariadoService = require('./usuarioEnVoluntariado');

module.exports = {
  catalogoService,
  orgService,
  userService,
  recompensaService,
  vacanteService,
  voluntariadoService,
  usuarioEnVoluntariadoService,
};
