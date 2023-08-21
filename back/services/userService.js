const userProvider = require('../providers/userProvider');

async function authenticateUser(userName, password) {
  const user = await userProvider.getUserByUsername(userName);
  if (!user || !userProvider.comparePasswords(password, user.password)) {
    return null;
  }
  return user;
}

async function registerUser(userDetails) {
  return userProvider.createUser(userDetails);
}

const findAll = async () => {
  const surveys = await userProvider.findAll();
  return surveys;
};

const findById = async (id) => {
  const user = await userProvider.findById(id);
  return user;
};

const updateUser = async (id, newData) => {
  const userUpdate = await userProvider.updateUser(id, newData);
  return userUpdate;
};

const deleteUser = async (id) => {
  await userProvider.deleteUser(id);
};

const restoreUser = async (id) => {
  const userRestored = await userProvider.restoreUser(id);
  return userRestored;
};

module.exports = {
  authenticateUser,
  registerUser,
  findAll,
  findById,
  updateUser,
  deleteUser,
  restoreUser,
};
