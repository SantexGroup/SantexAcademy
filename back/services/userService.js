
const {User} = require('../models/user')


async function crearUsuario(datosUsuario) {
    try {
      const usuarioCreado = await User.create(datosUsuario);
      console.log('Usuario creado:', usuarioCreado.toJSON());
      return usuarioCreado;
    } catch (error) {
      console.error('Error al crear usuario:', error);
      throw error;
    }
}


module.exports = {crearUsuario}