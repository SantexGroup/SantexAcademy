const { TipoDeUsuario } = require('../models');

const allTipoDeUsuarios = async () => {
  const tiposDeUsuarios = await TipoDeUsuario.findAll();
  return tiposDeUsuarios;
};

module.exports = {
  allTipoDeUsuarios,
};
