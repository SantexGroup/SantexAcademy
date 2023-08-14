const { userProvider } = require('../providers');

const createUser = async (userData) => {
  try {
    const createdUser = await userProvider.createUser(userData);
    return createdUser;
  } catch (error) {
    throw new Error('Error when creating user');
  }
};

module.exports = { createUser };
