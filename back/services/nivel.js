const { Nivel } = require('../models');

const allNivels = async () => {
  const niveles = await Nivel.findAll();
  return niveles;
};

module.exports = {
  allNivels,
};
