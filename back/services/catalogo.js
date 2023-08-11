const { catalogoProvider } = require('../providers');

const getCatalog = async (catalogID) => {
  const catalog = await catalogoProvider.getCatalog(catalogID);
  if (catalog) {
    return catalog;
  }
  return null;
};

module.exports = { getCatalog };
