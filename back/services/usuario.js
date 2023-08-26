const { userProvider } = require('../providers');

const createUser = async (user, role) => {
  const createdUser = await userProvider.createUser(user, role);
  return createdUser;
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  const users = await userProvider.getUsersByCriteria(queryOptions, bodyOptions);
  return users;
};

const updateUserById = async (id, user) => {
  const updatedUser = await userProvider.updateUserById(id, user);
  return updatedUser;
};

const deleteUserById = async (id) => {
  const deletedUser = await userProvider.deleteUserById(id);
  return deletedUser;
};

module.exports = {
  createUser, getUsersByCriteria, updateUserById, deleteUserById,
};
