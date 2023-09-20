const { User, TipoDeUsuario, Curso } = require('../models');

const allUser = async () => {
  const users = await User.findAll({
    include: [
<<<<<<< HEAD
      {
        model: TipoDeUsuario,
        // as: 'tipodeusuario',
      },
=======
     {
      model: TipoDeUsuario,
      as: 'TipoDeUsuario'
     }
>>>>>>> bd7ef0c27ccb7f1ff2813212cd73627f8f2b6746
    ],
    where: {
      estado: 'A',
    },
  });
  return users;
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
  const user = await User.findOne({
    where: searchCriteria,
  });
  return user;
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
};
