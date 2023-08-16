const { User } = require('../models');

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = { createUser };
