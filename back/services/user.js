/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
const userProvider = require('../providers/userProvider');

const getUser = async (id) =>
  // eslint-disable-next-line no-return-await, implicit-arrow-linebreak
  await userProvider.getUser(id);

// eslint-disable-next-line arrow-body-style
const createUser = async (user) => {
  return await userProvider.createUser(user);
};

const getUsers = async (options) => {
  return await userProvider.getUsers(options);
};

const deleteUser = async (id) => {
  return await userProvider.deleteUser(id);
};

const updateUser = async (id, user) => {
  return await userProvider.updateUser(id, user);
};

const validateUser = async (nombreusuario, contrasena) => {
  return await userProvider.validateUser(nombreusuario, contrasena);
};

module.exports = {
  getUser,
  createUser,
  getUsers,
  deleteUser,
  updateUser,
  validateUser,
};
