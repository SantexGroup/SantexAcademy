/* eslint-disable eol-last */
// eslint-disable-next-line no-unused-vars
const { Op } = require('sequelize');
const { User } = require('../models');

const getUser = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const user = await User.findByPk(id, { include: [{ all: true }] });
    // eslint-disable-next-line max-len
    // en el caso de que la tabla tenga otra configuración podemos excluir el password como muestra abajo
    // eslint-disable-next-line spaced-comment
    //const usuario = await Usuario.findByPk(id, {attributes: {exclude: ['password']}})
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

module.exports = {
  getUser,
};