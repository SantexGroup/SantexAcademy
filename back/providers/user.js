const { User } = require('../models');

const createUser = async (newUser) => {
  try {
    const createdUser = await User.create(newUser);
    console.log(createdUser);
    return createdUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

module.exports = {
  createUser,
};
