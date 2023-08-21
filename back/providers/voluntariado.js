const { Voluntariado } = require('../models');

const getVoluntariadosByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de bésqueda
    const where = {}; // Excluir registros eliminados lágicamente
    const validOptions = ['id', 'nombre', 'descripcion', 'fechaInicio', 'fechaFin'];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const voluntariados = await Voluntariado.findAll({
      where,
      attributes: { exclude: ['deletedAt'] },
    });

    return voluntariados;
  } catch (error) {
    console.error(
      'The volunteer/s could not be retrieved due to an error.',
      error,
    );
    throw error;
  }
};

const createVoluntariado = async (voluntariado) => {
  try {
    const newVoluntariado = await Voluntariado.create(voluntariado);
    return newVoluntariado;
  } catch (error) {
    console.error(
      'The volunteer/s could not be created due to an error.',
      error,
    );
    throw error;
  }
};

const updateVoluntariadoById = async (id, voluntariado) => {
  try {
    const updatedVoluntariado = await Voluntariado.update(voluntariado, {
      where: { id },
    });
    return updatedVoluntariado;
  } catch (error) {
    console.error(
      'The volunteer/s could not be updated due to an error.',
      error,
    );
    throw error;
  }
};

const deleteVoluntariadoById = async (id) => {
  try {
    const deletedVoluntariado = await Voluntariado.update(
      { deletedAt: new Date() },
      { where: { id } },
    );
    return deletedVoluntariado;
  } catch (error) {
    console.error(
      'The volunteer/s could not be deleted due to an error.',
      error,
    );
    throw error;
  }
};

module.exports = {
  getVoluntariadosByCriteria, createVoluntariado, updateVoluntariadoById, deleteVoluntariadoById,
};
