const { userProvider } = require("../providers");

const loginUser = async (email, password) => {
  const user = await userProvider.loginUser(email);

  if (!user || user.password !== password) {
    return null;
  }
  return user;
};


const createUser = async (organization) => {
  const createdOrganization = await userProvider.createUser(organization);
  return createdOrganization;
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
};

const deleteUserById = async (id) => {
  const deletedOrganization = await userProvider.deleteUserById(id);
  return deletedOrganization;
};

module.exports = {
  loginUser,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
