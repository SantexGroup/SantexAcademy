const { User, TipoDeUsuario, Curso, Matricula } = require('../models');

const allUser = async () => {
  const users = await User.findAll({
    include: [
      {
        model: TipoDeUsuario,
        as: 'TipoDeUsuario',
      },
    ],
    where: {
      estado: 'A',
    },
  });
  return users;
};

const allUserByFilters = async (nombre) => {
  try {
    let whereClause = {
      estado: 'A',
    };
  
    if (nombre) {
      whereClause.nombre = { [sequelize.Op.like]: `like %${'nombre'}%` };
    }
  
    const users = await User.findAll({
      where: whereClause,
      include: [
        {
         model: TipoDeUsuario,
         as: 'TipoDeUsuario'
        }
       ],
    });
  
    return users;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUser = async (id) => {
  try {
    const user = await User.findByPk(id, {
      include: [
        {
          model: TipoDeUsuario,
          as: 'TipoDeUsuario',
        },
      ],
      where: {
        estado: 'A',
      },
    });
    return user;
  } catch (error) {
    throw new Error('Hubo un error al obtener el usuario.');
  }
};

//------------Trae cursos x usuario------------------//
const getCursos = async (id) => {
  try {
    const user = await User.findByPk(id);
    const cursos = await user.getCursos();
    return cursos;
  } catch (error) {
    throw new Error('Hubo un error en servicios back al obtener los cursos.');
  }
};

//------------Trae matriculas x usuario------------------//
const getMatriculaPorUserId = async (id) => {
  try {
    const matriculas = await Matricula.findAll({
      where: {
        userId: id,
        estado: 'A'
      },
    });
    return matriculas;
  } catch (error) {
    throw new Error('Hubo un error en services user al obtener las matrículas por usuario.');
  }
};

//------------Trae (matricula x curso) x usuario-----//
const getMatricula = async (id) => {
  try {
    const cursosConMatricula = await Curso.findAll({
      include: [{
        model: Matricula,
        where: { id, estado:'A' },
        attributes: ['habilitado'],
        required: true,
      }],
      where: {
        estado: 'A',
      },
    });
    return cursosConMatricula;
  } catch (error) {
    throw new Error('Hubo un error en servicios back al obtener las matriculas.');
  }
};

//NO BORRAR--sirve para buscar cualquier usuario usando cualquier dato --util para filtros//

const getUserByData = async (searchCriteria) => {
  try {
    const user = await User.findOne({
      where: searchCriteria, estado: 'A'
    });
    if (!user) {
      throw new Error('No se encuentra usuario en userService'+ JSON.stringify(searchCriteria));
    }
    return user;
  } catch (error) {
    console.error('Hubo un error al buscar criteria en userService:', error + JSON.stringify(searchCriteria));
    throw error; 
  }
};

//-------------------------------------------------------------------------------------//

const createUser = async (body) => {
  try {
    const user = await User.create(body);
    return user;
  } catch (error) {
    throw new Error('Hubo un error al crear el usuario.');
  }
};

const updateUser = async (id, body) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    await user.update(body);
    return user;
  } catch (error) {
    throw new Error('Hubo un error al actualizar el usuario.');
  }
};

const deleteUser = async (id) => {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado.');
    }

    await user.update({ estado: false });
    return user;
  } catch (error) {
    throw new Error('Hubo un error al eliminar el usuario.');
  }
};

module.exports = {
  allUser,
  getUser,
  getCursos,
  getUserByData,
  createUser,
  updateUser,
  deleteUser,
  allUserByFilters,
  getMatricula,
  getMatriculaPorUserId,
};
