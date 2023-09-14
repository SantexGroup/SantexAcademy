const { Matricula } = require('../models');

const createMatricula = async (body) => {
  const matricula = await Matricula.create(body);
  return matricula;
};

const updateMatricula = async (id, body) => {
  const matricula = await Matricula.findByPk(id);
  await matricula.update(body);
  return matricula;
};

module.exports = {
  createMatricula,
  updateMatricula,
};
