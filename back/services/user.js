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

module.exports = {
  getUser,
  createUser,
  getUsers,
};
