const { Catalogo } = require('../models');

const getCatalog = async () => {
  try {
    const catalog = await Catalogo.findAll();
    return catalog;
  } catch (err) {
    console.error('The catalog could not be listed due to an error.', err);
    throw err;
  }
};

module.exports = { getCatalog };
