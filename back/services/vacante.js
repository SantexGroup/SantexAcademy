const { vacanteProvider } = require('../providers');

const getVacantesByCriteria = async (queryOptions, bodyOptions) => {
  const vacantes = await vacanteProvider.getVacantesByCriteria(
    queryOptions,
    bodyOptions,
  );
  return vacantes;
};

const createVacante = async (vacante) => {
  const newVacante = await vacanteProvider.createVacante(vacante);
  return newVacante;
};
const updateVacanteById = async (id, vacante) => {
  const updatedVacante = await vacanteProvider.updateVacanteById(id, vacante);
  return updatedVacante;
};

const deleteVacanteById = async (id) => {
  const deletedVacante = await vacanteProvider.deleteVacanteById(id);
  return deletedVacante;
};

module.exports = {
  getVacantesByCriteria,
  createVacante,
  updateVacanteById,
  deleteVacanteById,
};
