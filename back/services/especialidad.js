const { Especialidad } = require('../models');

const allEspecialidades = async () => {
  const especialidades = await Especialidad.findAll();
  return especialidades;
};

module.exports = {
  allEspecialidades,
};
