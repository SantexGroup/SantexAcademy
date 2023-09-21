const { User } = require('../models');

async function crearUsuario(datosUsuario) {
  try {
    const usuarioCreado = await User.create(datosUsuario);
    console.log('Usuario creado:', usuarioCreado.toJSON());
    return usuarioCreado.toJSON();
  } catch (error) {
    console.error('Error al crear usuario:', error);
    throw error;
  }
}

module.exports = { crearUsuario };
