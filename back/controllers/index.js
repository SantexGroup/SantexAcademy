const orgController = require('./organizacion');
const recoveryController = require('./recovery');
const userController = require('./usuario');
const voluntariadoController = require('./voluntariado');
const productController = require('./producto');
const usuarioEnVoluntariadoController = require('./usuarioEnVoluntariado');
const canjeController = require('./canje');

module.exports = {
  orgController,
  recoveryController,
  userController,
  voluntariadoController,
  productController,
  usuarioEnVoluntariadoController,
  canjeController
};
