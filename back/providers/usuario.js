const { Usuario, Carrito, Roles } = require('../models');
const { sequelize } = require('../config/db-config');


const loginUser = async (email) => {
  const user = await Usuario.findOne({
    where: { email: email },
  });
  if (!user) {
    return null;
  }
  return user;
};


const createUser = async (usuario, roleName) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();

    const newUser = await Usuario.create(usuario, {
      transaction,
      returning: true,
    });

    const role = await Roles.findOne(
      { where: { name: roleName } },
      {
        transaction,
        returning: true,
      }
    );

    await newUser.setRole(role, { transaction });

    const newCarrito = await newUser.createCarrito(
      { name: `Carrito de ${usuario.fullName}` },
      {
        transaction,
        returning: true,
      }
    );

    await transaction.commit();

    return [newUser, newCarrito];
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error("The user could not be created due to an error.", err);
    throw err;
  }
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de búsqueda
    const where = {}; // Excluir registros eliminados lógicamente
    const validOptions = ["id", "fullName", "telefono", "email"];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const users = await Usuario.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });

    return users;
  } catch (error) {
    console.error(
      "The organization/s could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const updateUserById = async (id, usuario) => {
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error("The user does not exist.");
    }
    const updatedUser = await user.update(usuario);
    return updatedUser;
  } catch (error) {
    console.error("The user could not be updated due to an error.", error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const deletedUser = await Usuario.findOne({
      where: {
        id,
      },
    });

    if (!deletedUser) {
      throw new Error('User not found');
    }

    deletedUser.destroy();
    await Carrito.destroy({ where: { usuarioId: id } });

    return deletedUser;
  } catch (error) {
    console.error('Error deleting user.', error);
    throw error;
  }
};

module.exports = {
  loginUser,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
