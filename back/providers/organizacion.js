const { Op } = require('sequelize');
const { Organizacion } = require('../models');

const getOrganizations = async () => {
  try {
    const organizations = await Organizacion.findAll();
    return organizations;
  } catch (err) {
    console.error(
      'The organizations could not be listed due to an error.',
      err,
    );
    throw err;
  }
};

// Esta funcion busca todos las organizaciones  o aquellas que cumplan con un criterio de busqueda

const getOrganizationByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de búsqueda
    const where = {}; // Excluir registros eliminados lógicamente
    const validOptions = ['id', 'nombre', 'telefono', 'cuit', 'email'];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const organizations = await Organizacion.findAll({
      where,
      attributes: { exclude: ['deletedAt'] },
    });

    return organizations;
  } catch (error) {
    console.error(
      'The organization/s could not be retrieved due to an error.',
      error
    );
    throw error;
  }
};




const updateOrganizationById = async (id, organization) => {
  try {
    const [affectedRows] = await Organizacion.update(organization, {
      where: { id, deletedAt: null },
    });
    if (affectedRows === 0) {
      throw new Error('No se encontrò el registro.');
    }
    const organizationModified = await Organizacion.findOne({
      where: { id },
    });
    return organizationModified;
  } catch (err) {
    console.error(
      'The organization could not be updated due to an error.',
      err,
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
      throw new Error('Organization not found');
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await organization.update({ deletedAt: new Date() });

    return organization;
  } catch (error) {
    console.error('Ocurrió un error al eliminar la organización.', error);
    throw error;
  }
};

const createOrganization = async (organization) => {
  try {
    const existingDeletedOrg = await Organizacion.findOne({
      where: {
        [Op.and]: [
          { deletedAt: { [Op.not]: null } }, // Buscar registros eliminados
          {
            [Op.or]: [
              { nombre: organization.nombre },
              { email: organization.email },
              { cuit: organization.cuit },
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
    const newOrganization = await Organizacion.create(organization);

    // Devolver el nuevo registro
    return newOrganization;
  } catch (err) {
    console.error(
      'The organization could not be created due to an error.',
      err,
    );
    throw err;
  }
};

module.exports = {
  getOrganizations,
  getOrganizationByCriteria,
  createOrganization,
  updateOrganizationById,
  deleteOrganizationById,
};
