const userProvider = require('../providers/userProvider');

const createUser = async (user) => {
  const newU = await userProvider.userCreate(user);
  return newU;
};

const findUserById = async (user) => {
  const found = await userProvider.findUser(user);
  return found;
};

const loginUser = async (data) => {
  const found = await userProvider.userValidate(data);
  return found;
};

const findUsers = async (filterParams) => {
  const found = await userProvider.find(filterParams);
  return found;
};

const modifyAUser = async (userId, newUser) => {
  const updatedUser = await userProvider.modifyUser(userId, newUser);
  return updatedUser;
};

const deleteById = async (userId) => {
  const userToDelete = await userProvider.deleteUser(userId);
  return userToDelete;
};

const getCourses = async (userId, filterParams) => await userProvider.getCourses(userId, filterParams);

module.exports = {
  createUser,
  findUserById,
  loginUser,
  findUsers,
  modifyAUser,
  deleteById,
  getCourses
};
