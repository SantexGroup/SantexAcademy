const { Op, or } = require("sequelize");
const { Organizacion } = require("../models");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dkvhkmu6m",
  api_key: "558152683374156",
  api_secret: "bkiHx6pQShvs8vOZWybO7Lf65Rg",
});

const loginOrg = async (email, cuit, password) => {
  try {
    const org = await Organizacion.findOne({
      where: {
        email: email,
        cuit: cuit,
        deletedAt: null,
      },
    });

    if (!org) {
      throw new Error("The organization does not exist");
    }

    // Verificar si la contraseña coincide
    if (org.password !== password) {
      throw new Error("Invalid Credentials");
    }

    // Verificar si el cuit coincide
    if (org.cuit !== cuit) {
      throw new Error("Invalid Credentials");
    }

    return org;
  } catch (error) {
    throw error; // Lanzar el error original, sin envolverlo en otro error
  }
};

const createOrganization = async (data) => {
  const { image, ...restOfData } = data;
  try {
    const existingDeletedOrg = await Organizacion.findOne({
      where: {
        [Op.and]: [
          { deletedAt: { [Op.not]: null } }, // Buscar registros eliminados
          {
            [Op.or]: [
              { name: restOfData.name },
              { email: restOfData.email },
              { cuit: restOfData.cuit },
            ],
          },
        ],
      },
    });
    if (existingDeletedOrg) {
      // Borrar el registro eliminado lógicamente
      await existingDeletedOrg.destroy();
    }
    // Crear el nuevo registro
    const newOrganization = await Organizacion.create({ image, ...restOfData });
    // Devolver el nuevo registro
    return newOrganization;
  } catch (err) {
    console.error(
      "The organization could not be created due to an error.",
      err
    );
    throw err;
  }
};

const getOrganizations = async () => {
  try {
    const organizations = await Organizacion.findAll();
    return organizations;
  } catch (err) {
    console.error(
      "The organizations could not be listed due to an error.",
      err
    );
    throw err;
  }
};

const updateOrganizationById = async (id, organization) => {
  try {
    const [affectedRows] = await Organizacion.update(organization, {
      where: { id, deletedAt: null },
    });
    if (affectedRows === 0) {
      throw new Error("No se encontrò el registro.");
    }
    const organizationModified = await Organizacion.findOne({
      where: { id },
    });
    return organizationModified;
  } catch (err) {
    console.error(
      "The organization could not be updated due to an error.",
      err
    );
    throw err;
  }
};

const deleteOrganizationById = async (id) => {
  try {
    const organization = await Organizacion.findOne({
      where: {
        id,
      },
    });

    if (!organization) {
      throw new Error("Organization not found");
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await organization.update({ deletedAt: new Date() });

    return organization;
  } catch (error) {
    console.error("Ocurrió un error al eliminar la organización.", error);
    throw error;
  }
};

// query parameters

const getOrganizationByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de búsqueda
    const where = {}; // Excluir registros eliminados lógicamente
    const validOptions = ["id", "nombre", "telefono", "cuit", "email"];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const organizations = await Organizacion.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });

    return organizations;
  } catch (error) {
    console.error(
      "The organization/s could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const getOrganizationByLocation = async (location, opportunityType) => {
  const filtered = {};
  if (location) {
    filtered.location = location;
  }
  if (!location && opportunityType) {
    filtered.opportunityType = opportunityType;
  }

  try {
    if (location || opportunityType) {
      const organizationFound = await Organizacion.findAll({
        where: filtered,
      });
      return organizationFound;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = {
  loginOrg,
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  updateOrganizationById,
  deleteOrganizationById,
  getOrganizationByLocation,
};
