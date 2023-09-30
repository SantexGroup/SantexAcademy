const { Especialidad } = require('../models');

const allEspecialidads = async () => {
  const especialidades = await Especialidad.findAll();
  return especialidades;
};

module.exports = {
  allEspecialidads,
};
