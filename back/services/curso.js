const { Curso } = require('../models');

const allCurso = async () => {
  const cursos = await Curso.findAll({
    where: {
      estado: 'A',
    },
  });
  return cursos;
};

const getCurso = async (id) => {
  const curso = await Curso.findByPk(id);
  return curso;
};

const createCurso = async (body) => {
  const curso = await Curso.create(body);
  return curso;
};

const updateCurso = async (id, body) => {
  const curso = await Curso.findByPk(id);
  await curso.update(body);
  return curso;
};

const deleteCurso = async (id) => {
  const curso = await Curso.findByPk(id);
  await curso.update({ estado: 'B' });
  return curso;
};

const activardesactivarCurso = async (id, estahabilitado) => {
  const curso = await Curso.findByPk(id);
  await curso.update({ habilitado: estahabilitado });
  return curso;
};

module.exports = {
  allCurso,
  getCurso,
  createCurso,
  updateCurso,
  deleteCurso,
  activardesactivarCurso,
};
