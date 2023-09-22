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

module.exports = {
  join,
};
