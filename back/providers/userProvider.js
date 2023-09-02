const { User } = require('../models');

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw ('Error:', error);
  }
};

const validateUser = async (email, password) => {
  try {
    const user = await User.findOne({
      where: { email, password, active: true },
    });
    if (user) {
      return user;
    }
    return false;
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = { createUser, validateUser };
