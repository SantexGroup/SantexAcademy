const { userProvider } = require("../providers");

const loginUser = async (email, password) => {
  const user = await userProvider.loginUser(email);

  if (!user || user.password !== password) {
    return null;
  }
  return user;
};


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
  loginUser,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
