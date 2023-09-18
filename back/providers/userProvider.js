const bcrypt = require('bcrypt');
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
  const userData = await getUserByEmail(email);
  const hashedPassword = userData.password;
  const match = await bcrypt.compare(password, hashedPassword);
  if (match) {
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
  } else {
    return false;
  }
};

module.exports = { createUser, validateUser };
