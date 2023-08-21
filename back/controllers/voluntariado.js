const { voluntariadoService } = require('../services');

const getVoluntariadosByCriteria = async (criteria) => {
  const voluntariados = await voluntariadoService.getVoluntariadosByCriteria(
    criteria,
  );
  return voluntariados;
};

const createVoluntariado = async (voluntariado) => {
  const newVoluntariado = await voluntariadoService.createVoluntariado(
    voluntariado,
  );
  return newVoluntariado;
};

const updateVoluntariadoById = async (id, voluntariado) => {
  const updatedVoluntariado = await voluntariadoService.updateVoluntariadoById(
    id,
    voluntariado,
  );
  return updatedVoluntariado;
};

const deleteVoluntariadoById = async (id) => {
  const deletedVoluntariado = await voluntariadoService.deleteVoluntariadoById(
    id,
  );
  return deletedVoluntariado;
};

module.exports = {
  getVoluntariadosByCriteria, createVoluntariado, updateVoluntariadoById, deleteVoluntariadoById,
};
