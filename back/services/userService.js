const userProvider = require('../providers/userProvider');

const createUser = async (user) => {
  const newU = await userProvider.userCreate(user);
  return newU;
};

module.exports = { createUser };
