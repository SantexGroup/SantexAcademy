const { Sex } = require('../models');

async function getSexs() {
  const sexs = await Sex.findAll();
  return sexs;
}

module.exports = {
  getSexs,
};
