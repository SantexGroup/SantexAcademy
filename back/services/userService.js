const userProvider = require('../providers/userProvider');

const createUser = async (user) => {
  const newU = await userProvider.userCreate(user);
  return newU;
};

const findUserByEmail = async (email) => {
  const found = await userProvider.findUser(email);
  return found;
};

const findUsers = async () => {
  const found = await userProvider.find();
  return found;
};

const modifyAUser = async (email, newUser) => {
  const updatedUser = await userProvider.modifyUser(email, newUser);
  return updatedUser;
};

const deleteByEmail = async (email) => {
  const userToDelete = await userProvider.deleteUser(email);
  return userToDelete;
};

module.exports = {
  createUser,
  findUserByEmail,
  findUsers,
  modifyAUser,
  deleteByEmail,
};
