const catalogoProvider = require('./catalogo');
const orgProvider = require('./organizacion');
const productProvider = require('./producto');
const userProvider = require('./usuario');
const voluntariadoProvider = require('./voluntariado');

module.exports = {
  catalogoProvider,
  orgProvider,
  userProvider,
  productProvider,
  voluntariadoProvider
};
