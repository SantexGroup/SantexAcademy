const { UserProvider } = require('../providers');

const getUserById = async (id) => UserProvider.getUserById(id);

const getUsers = async () => UserProvider.getUsers();

const createUser = async (user) => UserProvider.createUser(user);

const updateUser = async (id, user) => UserProvider.updateUser(id, user);

const deleteUser = async (id) => UserProvider.deleteUser(id);
module.exports = {
  getUserById, getUsers, createUser, updateUser, deleteUser,
};
