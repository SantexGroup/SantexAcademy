const {usuarioEnVoluntariadoProvider} = require('../providers');

// Servicio para unirse a un voluntariado
const join = async (userId, idVolunteering) => {
  try {

    // Llamar al proveedor para crear la relación usuario-voluntariado
    await usuarioEnVoluntariadoProvider.join(userId, idVolunteering);

    return 'Usuario unido al voluntariado exitosamente.';
  } catch (err) {
    console.error(err);
    throw err;
  }
};



const getJoins = async (userId) => {
  try {
    const joins = await usuarioEnVoluntariadoProvider.getJoins(userId);

    return joins;
  } catch (err) {
    console.error(err);
    throw err;
  }

}

const updateStatusById = async (postulateId, status) => {
  try {
    const postulate = await usuarioEnVoluntariadoProvider.updateStatusById(postulateId, status);

    return postulate;
  } catch (err) {
    console.error(err);
    throw err;
  }

}

const deleteJoinById = async(postulateId) => {
  try {
    const postulate = await usuarioEnVoluntariadoProvider.deleteJoinById(postulateId);

    return postulate;
  } catch (err) {
    console.error(err);
    throw err;
  }


}

module.exports = {
  join,
  getJoins,
  updateStatusById,
  deleteJoinById
};
