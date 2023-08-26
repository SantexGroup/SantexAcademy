const bcrypt = require('bcrypt');
const { User } = require('../models');

async function getUserByUsername(userName) {
  try {
    return await User.findOne({
      where: { userName },
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error while querying user by username:', error);
    throw error;
  }
}

function comparePasswords(password, hashedPassword) {
  return bcrypt.compareSync(password, hashedPassword);
}

async function createUser(userDetails) {
  const hashedPassword = await bcrypt.hash(userDetails.password, 10);
  return User.create({ ...userDetails, password: hashedPassword });
}

async function findAll() {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error al traer todos los registros');
  }
}

async function findById(id) {
  try {
    const user = await User.findByPk(id);

    if (user) {
      return user;
    }
    throw new Error('Usuario no encontrado');
  } catch (error) {
    throw error(`Error en la consulta de un user con id ${id}:`, error);
  }
}

async function updateUser(id, newData) {
  try {
    const user = await User.findByPk(id);
    if (!user) {
      throw new Error('Usuario no encontrado');
    }
    await user.update(newData, { fields: Object.keys(newData) });
    return user;
  } catch (error) {
    throw new Error(
      `Error al actualizar el usuario con id ${id}: ${error.message}`,
    );
  }
}

async function deleteUser(id) {
  const user = await User.findByPk(id);
  return user.destroy();
}

async function restoreUser(id) {
  try {
    const deletedUser = await User.findByPk(id, { paranoid: false });

    if (!deletedUser) {
      throw new Error('Usuario no encontrado');
    }

    if (deletedUser.deletedAt === null) {
      throw new Error('El usuario no está eliminado');
    }

    const restoredUser = await User.restore({ where: { id } });
    return restoredUser;
  } catch (error) {
    throw new Error(
      `Error al restaurar el usuario con id ${id}: ${error.message}`,
    );
  }
}

module.exports = {
  getUserByUsername,
  comparePasswords,
  createUser,
  findAll,
  findById,
  updateUser,
  deleteUser,
  restoreUser,
};
