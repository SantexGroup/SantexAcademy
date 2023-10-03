const orgController = require('./organizacion');
const userController = require('./usuario');
const productController = require('./producto');
const voluntariadoController = require('./voluntariado');
const usuarioEnVoluntariadoController = require('./usuarioEnVoluntariado');
const canjeController = require('./canje');

module.exports = {
  orgController,
  userController,
  productController,
  voluntariadoController,
  usuarioEnVoluntariadoController,
  canjeController
};
