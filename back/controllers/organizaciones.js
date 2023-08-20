const { orgService } = require("../services");


const getOrganizations = async (req, res) => {
  try {
    const organization = await orgService.getOrganizations();
    res.json(organization);
  } catch (err) {
    res.status(500).json({ action: "getOrganizations", error: err.message });
  }
};


//Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getOrganizationByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await orgService.getOrganizationByCriteria(queryOptions, bodyOptions);
    res.json(organizations);
  }catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const createOrganization = async (req, res) => {
  try {
    const organization = await orgService.createOrganization(req.body);
    res.json(organization);
  } catch (err) {
    res.status(500).json({ action: "createOrganization", error: err.message });
  }
};

const updateOrganizationById = async (req, res) => {
  try {
    const organization = await orgService.updateOrganizationById(
      req.params.id,
      req.body
    );
    if (!organization)
      return res.status(404).json({
        action: "updateOrganizationById",
        error: `Organization not found`,
      });
    const organizationModified = await orgService.getOrganizationByCriteria({
      id: organization.id,
      nombre: organization.nombre,
      direccion: organization.direccion,
      telefono: organization.telefono,
      email: organization.email,
      cuit: organization.cuit,
      password: organization.password
    })

    res.json(organizationModified);
  } catch (err) {
    res
      .status(500)
      .json({ action: "updateOrganizationById", error: err.message });
  }
};

const deleteOrganizationById = async (req, res) => {
  try {
    const organization = await orgService.deleteOrganizationById(req.params.id);
    if (!organization)
      return res.status(404).json({
        action: "deleteOrganizationById",
        error: `Organization not found`,
      });
    res.json(organization);
  } catch (err) {
    res.status(500).json({ action: "deleteOrganizationById", error: err.message });
  }

}

module.exports = {
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  updateOrganizationById,
  deleteOrganizationById,
};
