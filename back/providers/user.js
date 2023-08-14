const { User } = require('../models');

const createUser = async (user) => {
  try {
    const createdUser = await User.create(user);
    return createdUser;
  } catch (error) {
    throw new Error('Error when creating user');
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error('Error when found an user');
  }
};

const getAllUsers = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('Error when found the users');
  }
};
const deleteUser = async (id) => {
  try {
    const deletedUser = await User.destroy({
      where: {
        id,
      },
    });
    return deletedUser;
  } catch (error) {
    throw new Error('Error when deleting an user');
  }
};

const updateUser = async (id, user) => {
  try {
    const [updatedUser] = await User.update(user, {
      where: {
        id,
      },
    });
    return updatedUser;
  } catch (error) {
    throw new Error('Error when updating user');
  }
};

module.exports = {
  createUser, getUserById, getAllUsers, deleteUser, updateUser,
};
