const { Voluntariado } = require("../models");

const getVoluntariadosByCriteria = async (queryOptions, bodyOptions) => {
  try {
    const options = { ...queryOptions, ...bodyOptions }; // Combinar las opciones de bésqueda
    const where = {}; // Excluir registros eliminados lágicamente
    const validOptions = [
      "id",
      "nombre",
      "descripcion",
      "fechaInicio",
      "fechaFin",
    ];

    validOptions.forEach((option) => {
      if (options[option]) where[option] = options[option];
    });
    where.deletedAt = null;

    const voluntariados = await Voluntariado.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });

    return voluntariados;
  } catch (error) {
    console.error(
      "The volunteer/s could not be retrieved due to an error.",
      error
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
      "The volunteer/s could not be created due to an error.",
      error
    );
    throw error;
  }
};

const updateVoluntariadoById = async (id, voluntariado) => {
  try {
    const [affectedRows] = await Voluntariado.update(voluntariado, {
      where: { id, deletedAt: null },
    });
    if (affectedRows === 0) {
      throw new Error('No se encontrò el registro.');
    }
    const volunteerModified = await Voluntariado.findOne({
      where: { id },
    });
    return volunteerModified;
  } catch (err) {
    console.error('The volunteer could not be updated due to an error.', err);
    throw err;
  }
};


const deleteVoluntariadoById = async (id) => {
  try {
    const volunteer = await Voluntariado.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!volunteer) {
      throw new Error('volunteer not found');
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Voluntariado.update({ deletedAt: new Date() }, { where: { id } });

    // // todo! --Eliminar físicamente el registro de la tabla CestaRecompensas--
    // await CestaRecompensas.destroy({ where: { id } });

    return volunteer;
  } catch (error) {
    console.error('Ocurrió un error al eliminar el voluntariado.', error);
    throw error;
  }
};
module.exports = {
  getVoluntariadosByCriteria,
  createVoluntariado,
  updateVoluntariadoById,
  deleteVoluntariadoById,
};
