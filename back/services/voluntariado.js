const { voluntariadoProvider } = require('../providers');

const createVoluntariado = async (idOrg, voluntariado) => {
  const newVoluntariado = await voluntariadoProvider.createVoluntariado(
    idOrg,
    voluntariado,
  );
  return newVoluntariado;
};

const getVoluntariadosByCriteria = async (queryOptions, bodyOptions) => {
  const voluntariados = await voluntariadoProvider.getVoluntariadosByCriteria(
    queryOptions,
    bodyOptions,
  );
  return voluntariados;
};

  const getVoluntariadosByOrganization = async (idOrg) => {
    try {
      const voluntariados = await voluntariadoProvider.getVoluntariadosByOrganizationId(idOrg);
      return voluntariados;
    } catch (error) {
      console.error('Error en el servicio al obtener los voluntariados de la organización.', error);
      throw error;
    }
  };


const updateVoluntariadoById = async (idOrg, idVoluntariado, voluntariado) => {
  const updatedVolunteering = await voluntariadoProvider.updateVoluntariadoById(
    idOrg,
    idVoluntariado,
    voluntariado,
  );
  return updatedVolunteering;
};

const deleteVoluntariadoById = async (id) => {
  const deletedVoluntariado = await voluntariadoProvider.deleteVoluntariadoById(id);
  return deletedVoluntariado;
};

module.exports = {
  getVoluntariadosByCriteria,
  getVoluntariadosByOrganization,
  createVoluntariado,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};
