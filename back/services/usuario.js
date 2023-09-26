const { userProvider } = require("../providers");

const loginUser = async (email, password) => {
  const user = await userProvider.loginUser(email, password);

  if (!user) {
    return;
  }
  return user;
};

const createUser = async (user) => {
  const { image, ...restOfData } = user;
  const createdUser = await userProvider.createUser({ image, ...restOfData });
  return createdUser;
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  const organization = await userProvider.getUsersByCriteria(
    queryOptions,
    bodyOptions
  );
  return organization;
};

const getMyUser = async (id) => {
  try {
    const userProfile = await userProvider.getMyProfile(id);
    return userProfile;
  } catch (error) {
    throw new Error(error);
  }
};

const updateMyUser = async (newDataUser, id) => {
  const userUpdate = await userProvider.updateMyUser(newDataUser, id);
  return userUpdate;
};

const deleteUserById = async (id) => {
  const deletedUser = await userProvider.deleteUser(id);
  return deletedUser;
};

module.exports = {
  loginUser,
  getMyUser,
  createUser,
  getUsersByCriteria,
  updateMyUser,
  deleteUserById,
};
