// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const { User } = require('../models');

//
//
// Servicio que recupera los datos ingresados y los guarda para crear un usuario.

async function recordUser(rolesId, nick, password, name, lastName, email, phone) {
  try {
    // Lógica para crear el nuevo usuario en la base de datos
    const userCreated = await User.create({
      roles_id: rolesId,
      nick,
      password,
      name,
      lastName,
      email,
      phone,
    });
    // Devolver el objeto del usuario creado
    return userCreated;
  } catch (error) {
    /* En caso de error, imprimir el mensaje de error y lanzar una excepción para que el llamador
    lo maneje adecuadamente */
    console.error('Error al guardar el usuario:', error);
    throw error;
  }
}
// Realiza el proceso de inicio de sesión de un usuario.
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
  if (id) {
    user.id = id;
  }
  if (nick) {
    user.nick = nick;
  }
  if (password) {
    user.password = password;
  }
  if (name) {
    user.name = name;
  }
  if (lastName) {
    user.lastName = lastName;
  }
  if (email) {
    user.email = email;
  }
  if (phone) {
    user.phone = phone;
  }
  if (!user) {
    throw new Error('El ID del usuario no existe en la base de datos');
  }
  // Guardar el usuario actualizado
  const userEdited = await user.save();
  // Devolver el objeto del usuario actualizado
  return userEdited;
}

// Servicio para eliminar usuarios
async function deleteUser(id) {
  /* Buscamos el ususario en la base de datos por ID */
  const user = await User.findByPk(id);
  /* Si encontramos el usuario */
  if (user && user.deletedAt === null) {
    /* Actualizamos el estado de la columna deletedAt, para un borrado logico */
    User.update({
      deletedAt: new Date(),
    }, {
      where: {
        id,
      },
    });
  } else {
    /* Si el usuario el valor pasado por params no es valido */
    throw Error('No existe ese usuario');
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
