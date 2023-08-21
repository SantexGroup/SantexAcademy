const { voluntariadoProvider } = require('../providers');

const getVoluntariadosByCriteria = async (queryOptions, bodyOptions) => {
  const voluntariados = await voluntariadoProvider.getVoluntariadosByCriteria(
    queryOptions,
    bodyOptions,
  );
  return voluntariados;
};

const createVoluntariado = async (voluntariado) => {
  const newVoluntariado = await voluntariadoProvider.createVoluntariado(
    voluntariado,
  );
  return newVoluntariado;
};

const updateVoluntariadoById = async (id, voluntariado) => {
  const updatedVoluntariado = await voluntariadoProvider.updateVoluntariadoById(
    id,
    voluntariado,
  );
  return updatedVoluntariado;
};

const deleteVoluntariadoById = async (id) => {
  const deletedVoluntariado = await voluntariadoProvider.deleteVoluntariadoById(
    id,
  );
  return deletedVoluntariado;
};

module.exports = {
  getVoluntariadosByCriteria, createVoluntariado, updateVoluntariadoById, deleteVoluntariadoById,
};
