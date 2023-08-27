const { Vacante } = require("../models");

const getVacantesByCriteria = async (queryOptions, bodyOptions) => {
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

    const vacantes = await Vacante.findAll({
      where,
      attributes: { exclude: ["deletedAt"] },
    });

    return vacantes;
  } catch (error) {
    console.error(
      "The volunteering/s could not be retrieved due to an error.",
      error
    );
    throw error;
  }
};

const createVacante = async (vacante) => {
  try {
    const newVacante = await Vacante.create(vacante);
    return newVacante;
  } catch (error) {
    console.error(
      "The volunteering/s could not be created due to an error.",
      error
    );
    throw error;
  }
};

const updateVacanteById = async (id, vacante) => {
  try {
    const [affectedRows] = await Vacante.update(vacante, {
      where: { id, deletedAt: null },
    });
    if (affectedRows === 0) {
      throw new Error('No se encontrò el registro.');
    }
    const modifiedVacante = await Vacante.findOne({
      where: { id },
    });
    return modifiedVacante;
  } catch (err) {
    console.error('The volunteering could not be updated due to an error.', err);
    throw err;
  }
};


const deleteVacanteById = async (id) => {
  try {
    const vacante = await Vacante.findOne({
      where: {
        id,
        deletedAt: null,
      },
    });

    if (!vacante) {
      throw new Error('vacante not found');
    }

    // Aplicar borrado lógico estableciendo la columna deletedAt
    await Vacante.update({ deletedAt: new Date() }, { where: { id } });

    // // todo! --Eliminar físicamente el registro de la tabla Carrito--
    // await Carrito.destroy({ where: { id } });

    return vacante;
  } catch (error) {
    console.error('Ocurrió un error al eliminar la vacante.', error);
    throw error;
  }
};
module.exports = {
  createVacante,
  getVacantesByCriteria,
  updateVacanteById,
  deleteVacanteById,
};
