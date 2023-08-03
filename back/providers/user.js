const { User } = require('../models');

const createUser = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
  createUser,
};
