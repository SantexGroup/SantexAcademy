const {userProvider} = require("../providers");

const createUser = async (organization) => {
  const createdOrganization = await userProvider.createUser(
    organization
  );
  return createdOrganization;
};

const getUsersByCriteria = async (queryOptions, bodyOptions) => {
  const organization = await userProvider.getUsersByCriteria(queryOptions, bodyOptions);
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
  const deletedOrganization = await userProvider.deleteUserById(id);
  return deletedOrganization;

}

module.exports = { createUser, getUsersByCriteria, updateUserById, deleteUserById }