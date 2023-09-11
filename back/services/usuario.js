const { userProvider } = require("../providers");

const loginUser = async (email, password) => {
  const user = await userProvider.loginUser(email, password);
  

  if (!user || user.password !== password) {
    return null;
    
  }
  return user;
};

 const getUserProfile = async (id) => {
  try {
    const userProfile = await userProvider.getUserProfile(id);
    return userProfile;
  } catch (error) {
    throw new Error(error);
  }
 }

const createUser = async (user) => {
  const createdUser = await userProvider.createUser(user);
  return createdUser;
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  const organization = await userProvider.getUsersByCriteria(
    queryOptions,
    bodyOptions
  );
  return organization;

};

const updateUserById = async (id, organization) => {
  const updatedOrganization = await userProvider.updateUserById(
    id,
    organization
  );
  return updatedOrganization;
}

const deleteUserById = async (id) => {
  const deletedUser = await userProvider.deleteUserById(id);
  return deletedUser;
};

module.exports = {
  loginUser,
  getUserProfile,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
