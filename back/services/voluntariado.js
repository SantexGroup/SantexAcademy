const { voluntariadoProvider } = require("../providers");

const createVoluntariado = async (idOrg, voluntariado) => {
  const newVoluntariado = await voluntariadoProvider.createVoluntariado(
    idOrg,
    voluntariado
  );
  return newVoluntariado;
};

const getAllVolunteers = async (queryOptions, bodyOptions) => {
  const voluntariados = await voluntariadoProvider.getAllVolunteers();
  return voluntariados;
};

const getVolunteerById = async (id) => {
  const volunteer = await voluntariadoProvider.getVolunteerById(id);
  return volunteer;
};

const getVoluntariadosByOrganization = async (idOrg) => {
  try {
    const voluntariados =
      await voluntariadoProvider.getVoluntariadosByOrganizationId(idOrg);
    return voluntariados;
  } catch (error) {
    console.error(
      "Error en el servicio al obtener los voluntariados de la organización.",
      error
    );
    throw error;
  }
};

const updateVoluntariadoById = async (idOrg, idVoluntariado, voluntariado) => {
  const updatedVolunteering = await voluntariadoProvider.updateVoluntariadoById(
    idOrg,
    idVoluntariado,
    voluntariado
  );
  return updatedVolunteering;
};

const deleteVoluntariadoById = async (idVol, idOrg) => {
  const deletedVoluntariado = await voluntariadoProvider.deleteVoluntariadoById(
    idVol,
    idOrg
  );
  return deletedVoluntariado;
};

module.exports = {
  createVoluntariado,
  getAllVolunteers,
  getVolunteerById,
  getVoluntariadosByOrganization,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};