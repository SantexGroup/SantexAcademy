const { orgProvider } = require("../providers");

const getOrganizations = async () => {
  const organizations = await orgProvider.getOrganizations();
  return organizations;
};

const getOrganizationByCriteria = async (options) => {
  const organization = await orgProvider.getOrganizationByCriteria(options);
  return organization;
};

const createOrganization = async (organization) => {
  const createdOrganization = await orgProvider.createOrganization(
    organization
  );
  return createdOrganization;
};

const updateOrganizationById = async (id, organization) => {
  const updatedOrganization = await orgProvider.updateOrganizationById(
    id,
    organization
  );
  return updatedOrganization;
};

const deleteOrganizationById = async (id) => {
  const deletedOrganization = await orgProvider.deleteOrganizationById(id);
  return deletedOrganization;

}


module.exports = {
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  updateOrganizationById,
  deleteOrganizationById
};
