const { Op, or } = require("sequelize");
const { Organizacion } = require("../models");
const { hashPassword, comparePassword } = require("../config/crypt");

const loginOrg = async (email, cuit, password) => {
  try {
    const org = await Organizacion.findOne({
      where: {
        email: email,
      },
    });

    if (!org) {
      throw new Error("Invalid Credentials");
    }
    const matchPassword = comparePassword(password, org.password);

    if (!matchPassword) {
      throw new Error("Invalid Credentials");
    }

    if (org.dataValues.cuit !== cuit.toString()) {
      throw new Error("Invalid Credentials");
    }

    return org;
  } catch (error) {
    throw error;
  }
};

// Proveedor
const updatePassword = async (orgId, password) => {
  try {
    const org = await Organizacion.findOne({
      where: {
        id: orgId,
      },
    });

    if (!org) {
      throw new Error("Organization not found");
    }

    // Actualiza la contraseña y guarda los cambios
    org.password = hashPassword(password);
    await org.save();

    // Devuelve la organización actualizada
    return org;
  } catch (error) {
    throw error;
  }
};


const createOrganization = async (data) => {
  const { image, password,...restOfData } = data;
  try {
    let existingOrg = await Organizacion.findOne({
      where: {
            [Op.or]: [
              { name: restOfData.name },
              { email: restOfData.email },
              { cuit: restOfData.cuit },
        ],
      },
      paranoid:false,
    });

    if (existingOrg) {
      if (existingOrg.deletedAt) {
        // Restaurar el registro eliminado lógicamente y actualizarlo
        await existingOrg.restore();
      }
      await existingOrg.update({
        image,
        password: hashPassword(password),
        ...restOfData,
      });
    } else {
      existingOrg = await Organizacion.create({
        image,
        password: hashPassword(password), 
        ...restOfData,
      });
    }

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

const getOrganizationsById = async (orgId) => {
  try {
    const organization = await Organizacion.findOne({
      where: {
        id: orgId,
      },
    });

    if (!organization) {
      throw new Error("Organization not found");
    }

    return organization;
  } catch (error) {
    console.error("Ocurrió un error al obtener la organización.", error);
    throw error;
  }
};
const updateOrganizationById = async (id, organization) => {
  try {
    const affectedRows = await Organizacion.update(organization, {
      where: { id, deletedAt: null },
      returning: true,
    });
    if (!affectedRows) {
      throw new Error("No se encontrò el registro.");
    }
    return affectedRows;
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

    // Aplicar borrado lógico estableciendo la columna deletedAt y la columna email en null (solucion provisoria)
    await organization.update({ deletedAt: new Date(), email: " " });

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

// const addCoverPage = async (id, img) => {};

const updatePhotoMyProfile = async (image, id) => {
  try {
    const updatedUser = await Organizacion.update(
      { image: image },
      { where: { id: id }, returning: true }
    );

    if (!updatedUser) return;

    return updatedUser;
  } catch (error) {
    return console.log("Error updating your profile picture", error);
  }
};

module.exports = {
  loginOrg,
  updatePassword,
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  getOrganizationsById,
  updateOrganizationById,
  deleteOrganizationById,
  getOrganizationByLocation,
  updatePhotoMyProfile,
};
