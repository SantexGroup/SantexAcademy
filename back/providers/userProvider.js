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
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUserByEmail = async (option) => {
  try {
    const user = await User.findOne({
      where: { email: option },

    }); return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const createCode = async (email) => {
  try {
    const user = await getUserByEmail(email);
    let code = '';
    for (let index = 0; index <= 5; index + 1) {
      const character = Math.ceil(Math.random() * 9);
      code += character;
    }
    user.code = code;
    user.save();
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};

const validateCode = async (code, email) => {
  try {
    const user = await getUserByEmail(email);
    if (user.code !== code) {
      throw new Error('Error: incorrect code');
    }
    user.active = true;
    user.save();
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUsers = async () => {
  try {
    const options = {
      include: [{ all: true }],
      attributes: { exclude: ['password'] },
    };
    const users = await User.findAll(options);
    return users;
  } catch (error) {
    throw ('Error:', error);
  }
};

const updateUser = async (userId, userOptions) => {
  try {
    await getUserById(userId);
    await User.update(userOptions, { where: { id: userId } });
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const patchUser = async (userId, newPassword) => {
  try {
    const user = await User.findByPk(userId);
    user.password = newPassword.password;
    await user.save();
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const deleteUser = async (userId) => {
  try {
    return await User.update(
      { active: false },
      { where: { id: userId, active: true } },
    );
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
        where: { email, active: true },
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

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateUser,
  validateCode,
  createCode,
};
