const { Marital } = require('../models');

async function getMarital() {
  const marital = await Marital.findAll();
  return marital;
}

module.exports = {
  getMarital,
};
