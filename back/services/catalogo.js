const { catalogoProvider } = require('../providers');

const getCatalog = async () => {
  const catalog = await catalogoProvider.getCatalog();
  return catalog;
};

module.exports = { getCatalog };
