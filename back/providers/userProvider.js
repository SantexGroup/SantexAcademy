/* eslint-disable no-else-return */
/* eslint-disable no-useless-catch */
/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-vars
const { Op } = require('sequelize');
const { User } = require('../models');

const getUser = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const user = await User.findByPk(id, { include: [{ all: true }] });
    // eslint-disable-next-line max-len
    // eslint-disable-next-line spaced-comment
    if (user) {
      return user;
    // eslint-disable-next-line no-else-return
    } else {
      throw new Error('Usuario no encontrado');
    }
  } catch (error) {
    throw error;
  }
};

const createUser = async (userAttributes) => {
  try {
    const newUser = await User.create(userAttributes);
    return newUser;
  } catch (error) {
    throw error;
  }
};

const getUsers = async (conditions) => {
  try {
    let options = { include: [{ all: true }] };
    if (conditions) {
      options = { ...options, where: { [Op.or]: conditions } };
      // eslint-disable-next-line max-len
    } // opciones tiene username y/o role, capturado en la url. Op nos permite buscar por distintos operadores logicos
    const users = await User.findAll(options);

    if (users) {
      return users;
    } else {
      throw new Error(
        'No se encontraron Usuarios con estas condiciones de busqueda',
      );
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getUser,
  createUser,
  getUsers,
};