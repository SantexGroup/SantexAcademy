const { userProvider } = require('../providers');

const createUser = async (userData) => {
  try {
    const createdUser = await userProvider.createUser(userData);
    return createdUser;
  } catch (error) {
    throw new Error('Error when creating user');
  }
};

const getUserById = async (id) => {
  try {
    const user = await userProvider.getUserById(id);
    if (!user) {
      throw new Error('User not found ');
    }
    return user;
  } catch (error) {
    throw new Error('Error when searching for user ');
  }
};

module.exports = { createUser, getUserById };
