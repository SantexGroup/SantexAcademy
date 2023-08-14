const { User } = require('../models');

const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw new Error('Error when creating user');
  }
};

module.exports = { createUser };
