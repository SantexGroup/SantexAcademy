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

const getUsers = async () => {
  try {
    const options = { include: [{ all: true }] };
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
    return User.findByPk(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};

const deleteUser = async (userId) => {
  try {
    return User.destroy({ where: { id: userId } });
  } catch (error) {
    throw ('Error:', error);
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
};
