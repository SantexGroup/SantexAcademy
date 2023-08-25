const { Op } = require('sequelize');
const { Usuario } = require('../models');
const { Carrito } = require('../models');
const { sequelize } = require('../config/db-config');

const createUser = async (usuario) => {
  let transaction;
  try {
    transaction = await sequelize.transaction();
    const newUser = await Usuario.create(usuario, {
      transaction,
      returning: true,
    });
    const newCarrito = await newUser.createCarrito(
      { name: `Carrito de ${usuario.fullName}` },
      {
        transaction,
        returning: true,
      }
    );

    await transaction.commit();

    // Devolver el nuevo registro de usuario
    return [newUser, newCarrito];
  } catch (err) {
    if (transaction) {
      await transaction.rollback();
    }
    console.error('The user could not be created due to an error.', err);
    throw err;
  }
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de búsqueda
    const where = {}; // Excluir registros eliminados lógicamente
    const validOptions = ['id', 'fullName', 'telefono', 'email'];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const organizations = await Usuario.findAll({
      where,
      attributes: { exclude: ['deletedAt'] },
    });

    return organizations;
  } catch (error) {
    console.error('The organization/s could not be retrieved due to an error.', error);
    throw error;
  }
};

const updateUserById = async (id, usuario) => {
  try {
    const user = await Usuario.findByPk(id);
    if (!user) {
      throw new Error('The user does not exist.');
    }
    const updatedUser = await user.update(usuario);
    return updatedUser;
  } catch (error) {
    console.error('The user could not be updated due to an error.', error);
    throw error;
  }
};

const deleteUserById = async (id) => {
  try {
    const user = await Usuario.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Usuario.update({ deletedAt: new Date() }, { where: { id } });

    // todo! --Eliminar físicamente el registro de la tabla Carrito--
    await Carrito.destroy({ where: { id } });

    return user;
  } catch (error) {
    console.error('Ocurrió un error al eliminar el usuario.', error);
    throw error;
  }
};

module.exports = {
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
