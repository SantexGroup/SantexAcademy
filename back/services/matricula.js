const { Matricula, User, Curso } = require('../models');

const allMatriculas = async () => {
  const matriculas = await Matricula.findAll({
    attributes: ['id', 'userId', 'cursoId', 'habilitado', 'estado'],
    include: [
      {
        model: Curso,
        as: 'Curso', 
      },
      {
        model: User,
        as: 'User', 
      },
    ],
    where: {
      estado: 'A',
    },
  });
  return matriculas;
};

const createMatricula = async (body) => {
  const matricula = await Matricula.create(body);
  return matricula;
};

const updateMatricula = async (id, body) => {
  try {
    const matricula = await Matricula.findByPk(id);
    
    if (!matricula) { 
      throw new Error('Matricula no encontrada.');
    }

    await matricula.update(body);
    return matricula;
  } catch (error) {
    throw new Error('Hubo un error al actualizar la matricula.');
  }
};

module.exports = {
  createMatricula,
  updateMatricula,
  allMatriculas
};
