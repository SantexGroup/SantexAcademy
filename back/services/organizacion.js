const { orgProvider } = require("../providers");

const loginOrg = async (email, cuit, password) => {
  const org = await orgProvider.loginOrg(email, cuit, password);

  if (!org) {
    return;
  }
  return org;
};

const createOrganization = async (data) => {
  const { image, ...restOfData } = data;
  const createdOrganization = await orgProvider.createOrganization({
    image,
    ...restOfData,
  });
  return createdOrganization;
};

const getOrganizations = async () => {
  const organizations = await orgProvider.getOrganizations();
  return organizations;
};

const updateOrganizationById = async (id, organization) => {
  const updatedOrganization = await orgProvider.updateOrganizationById(
    organization,
    id
  );
  return updatedOrganization;
};

const deleteOrganizationById = async (id) => {
  const deletedOrganization = await orgProvider.deleteOrganizationById(id);
  return deletedOrganization;
};

const getOrganizationsById = async (orgId) => {
  const organization = await orgProvider.getOrganizationsById(orgId);
  return organization;
};
// query parameters

const getOrganizationByCriteria = async (queryOptions, bodyOptions) => {
  const organization = await orgProvider.getOrganizationByCriteria(
    queryOptions,
    bodyOptions
  );
  return organization;
};

const getOrganizationByLocation = async (location, opportunityType) => {
  const organizationFound = await orgProvider.getOrganizationByLocation(
    location,
    opportunityType
  );
  return organizationFound;
};

const updatePhotoMyProfile = async (image, id) => {
  const photoUpdate = await orgProvider.updatePhotoMyProfile(image, id);
  return photoUpdate;
};

module.exports = {
  loginOrg,
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  getOrganizationsById,
  updateOrganizationById,
  deleteOrganizationById,
  getOrganizationByLocation,
  updatePhotoMyProfile,
};
