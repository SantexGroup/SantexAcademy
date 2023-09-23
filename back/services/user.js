const { User, TipoDeUsuario, Curso } = require('../models');

const allUser = async () => {
  const users = await User.findAll({
    include: [
     {
      model: TipoDeUsuario,
      as: 'TipoDeUsuario'
     }
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
         as: 'TipoDeUsuario'
        }
       ],
    });
    return user;
  } catch (error) {
    throw new Error('Hubo un error al obtener el usuario.');
  }
};

const getCursos = async (id) => {
  try {
    const user = await User.findByPk(id);
    const cursos = await user.getCursos();
    return cursos;
  } catch (error) {
    throw new Error('Hubo un error al obtener los cursos.');
  }
};

//NO BORRAR--sirve para buscar cualquier usuario usando cualquier dato--util para filtros//

const getUserByData = async (searchCriteria) => {
  try {
    const user = await User.findOne({
      where: searchCriteria,
    });
    if (!user) {
      throw new Error('No se encuentra usuario en userService'+ JSON.stringify(searchCriteria)); // Detiene todo por el error
    }
    return user;
  } catch (error) {
    console.error('Hubo un error al buscar criteria en userService:', error + JSON.stringify(searchCriteria));
    throw error; // Lanzar la excepción original nuevamente
  }
};
// const getUserByData = async (searchCriteria) => {
//   const user = await User.findOne({
//     where: searchCriteria,
//   });
//   return user;
// };

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
};
