// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function recordUser(rolesId, nick, password, name, lastName, email, phone) {
  const userCreated = await User.create({
    rolesId,
    nick,
    password,
    name,
    lastName,
    email,
    phone,
  });
  if (userCreated) {
    return userCreated;
  }
  throw new Error(); // Re-lanzamos el error para que el llamador lo maneje adecuadamente
}

// Servicio que autoriza login
async function login(nick, password) {
  // Buscar al usuario en la base de datos por su nick y contraseña
  const user = await User.findOne({
    where: {
      nick,
      password,
    },
  });
  // Si no se encuentra el usuario, lanzar un error indicando que las credenciales son incorrectas
  if (!user) {
    throw new Error('El nick o contraseña son incorrectos');
  }

  const jwtSecret = process.env.JWT_SECRET;

  const token = jwt.sign({
    id: user.id,
    nick: user.nick,
  }, jwtSecret);
  // Devolver un objeto con el token de acceso
  return {
    accessToken: token,
  };
}

// Servicio que actualiza datos de un usuario
async function updateUser(id, nick, password, name, lastName, email, phone) {
  // Buscar al usuario en la base de datos por su ID
  const user = await User.findByPk(id);
  // Actualizar los campos del usuario con los nuevos valores proporcionados, si existen
  const updateData = {
    nick,
    password,
    name,
    lastName,
    email,
    phone,
  }; await user.update(updateData);

  return user;
}

// Servicio de borrado de usuario provisorio. Hasta finalar el delete de los demas servicios
async function deleteUser(id) {
  /* Buscamos el ususario en la base de datos por ID */
  const user = await User.findByPk(id);
  // Si el usuario nexiste y no fue eliminado, Lo macmos como eliminado
  if (user && user.deletedAt === null) {
    user.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    throw Error('El susuario no existe');
  }
}
//
// Exportamos el servicio para inyectar en el controlador
module.exports = {
  recordUser,
  updateUser,
  login,
  deleteUser,
};
