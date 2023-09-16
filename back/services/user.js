const { User, TipoDeUsuario } = require('../models');

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

const getUserByData = async (searchCriteria) => {
  const user = await User.findOne({
    where: searchCriteria,
  });
  return user;
};

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
  getUserByData,
  createUser,
  updateUser,
  deleteUser,
};
