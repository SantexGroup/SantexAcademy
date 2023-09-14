const { User, TipoDeUsuario } = require('../models');

const allUser = async () => {
  const users = await User.findAll({
    // include: [
    //   {
    //     model: TipoDeUsuario,
    //     as: 'tipodeusuario',
    //   },
    // ],
    where: {
      activoactualmente: true,
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
          as: 'idtipodeusuario', // Asegúrate de usar el mismo nombre que definiste en la asociación
        },
      ],
    });
    return user;
  } catch (error) {
    throw new Error('Hubo un error al obtener el usuario.');
  }
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
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
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};

// <<<<<< HEAD
// const { User } = require('../models');

// const allUser = async () => {
//   const users = await User.findAll({
//     where: {
//       estado: true,
//     },
//   });
//   return users;
// };

// const getUser = async (id) => {
//   const user = await User.findByPk(id);
//   return user;
// };

// const getUserByEmail = async (email) => {
//   const user = await User.findOne({
//     where: {
//       email: email,
//     },
//   });
//   return user;
// };

// const createUser = async (body) => {
//   const user = await User.create(body);
//   return user;
// };

// const updateUser = async (id, body) => {
//   const user = await User.findByPk(id);
//   await user.update(body);
//   return user;
// };

// const deleteUser = async (id) => {
//   const user = await User.findByPk(id);
//   await user.update({ estado: false });
//   return user;
// };

// module.exports = {
//   allUser,
//   getUser,
//   getUserByEmail,
//   createUser,
//   updateUser,
//   deleteUser,
// };