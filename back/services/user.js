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

const getAllUsers = async () => {
  try {
    const users = await userProvider.getAllUsers();
    if (!users) {
      throw new Error('Users not found ');
    }
    return users;
  } catch (error) {
    throw new Error('Error when searching for users ');
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await userProvider.deleteUser(id);
    if (deletedUser === 0) {
      throw new Error('User not found');
    }
    return deletedUser;
  } catch (error) {
    throw new Error('Error when deleting an user');
  }
};

const updateUser = async (id, userData) => {
  try {
    const updatedUser = await userProvider.updateUser(id, userData);
    if (updatedUser === 0) {
      throw new Error('User not found');
    }
    return updatedUser;
  } catch (error) {
    throw new Error('Error when updating user');
  }
};

module.exports = {
  createUser, getUserById, getAllUsers, deleteUser, updateUser,
};
