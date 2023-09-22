const { UsuarioEnVoluntariado } = require('../models');

// Proveedor de Datos para crear la relación usuario-voluntariado
const join = async (userId, idVolunteering) => {
  try {
    await UsuarioEnVoluntariado.create({ userId, idVolunteering });
  } catch (err) {
    console.error(err);
    throw err;
  }
};



const count = async (volunteerId) => {
  try {
    const count = await UsuarioEnVoluntariado.count({
      where: {
        volunteerId,
      },
    });
    return count;
  } catch (err) {
    console.error('The amount of volunteers in the volunteering could not be counted due to an error.', err);
    throw err;
  }
}

module.exports = { join, count };
