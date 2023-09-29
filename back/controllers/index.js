const orgController = require('./organizacion');
const userController = require('./usuario');
const productController = require('./producto');
const vacanteController = require('./vacante');
const voluntariadoController = require('./voluntariado');
const usuarioEnVoluntariadoController = require('./usuarioEnVoluntariado');

module.exports = {
  orgController,
  userController,
  productController,
  vacanteController,
  voluntariadoController,
  usuarioEnVoluntariadoController,
};
