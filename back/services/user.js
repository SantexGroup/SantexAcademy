const { userProvider } = require('../providers');

const createUser = (newUser) => userProvider.createUser(newUser);

module.exports = {
  createUser,
};
