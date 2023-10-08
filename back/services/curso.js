const { Curso, Nivel } = require('../models');

const allCurso = async () => {
  const cursos = await Curso.findAll({
    where: {
      estado: 'A',
    },
    include: [
      {
        model: Nivel,
        as: 'Nivel',
      },
    ],
  });
  return cursos;
};

const getCurso = async (id) => {
  try {
    const curso = await Curso.findByPk(id, {
      include: [
        {
          model: Nivel,
          as: 'Nivel', // Asegúrate de usar el mismo nombre que definiste en la asociación
        },
      ],
    });
    return curso;
  } catch (error) {
    throw new Error('Hubo un error al obtener el curso.');
  }
};

const getUsers = async (id) => {
  try {
    const curso = await Curso.findByPk(id);
    const users = await curso.getUsers();
    return users;
  } catch (error) {
    throw new Error('Hubo un error al obtener usuarios.');
  }
};

const createCurso = async (body) => {
  try {
    const curso = await Curso.create(body);
    return curso;
  } catch (error) {
    throw new Error('Hubo un error al crear el curso.');
  }
};

const updateCurso = async (id, body) => {
  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      throw new Error('Curso no encontrado.');
    }
    await curso.update(body);
    return curso;
  } catch (error) {
    throw new Error('Hubo un error al actualizar el curso.');
  }
};

const deleteCurso = async (id) => {
  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      throw new Error('Curso no encontrado.');
    }
    await curso.update({ estado: 'B' });
    return curso;
  } catch (error) {
    throw new Error('Hubo un error al eliminar el curso.');
  }
};

const activardesactivarCurso = async (id, estahabilitado) => {
  try {
    const curso = await Curso.findByPk(id);
    if (!curso) {
      throw new Error('Curso no encontrado.');
    }
    await curso.update({ habilitado: estahabilitado });
    return curso;
  } catch (error) {
    throw new Error('Hubo un error al activar/desactivar el curso.');
  }
};

module.exports = {
  allCurso,
  getCurso,
  getUsers,
  createCurso,
  updateCurso,
  deleteCurso,
  activardesactivarCurso,
};
