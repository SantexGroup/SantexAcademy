// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const { User } = require('../models');

async function recordUser(rolesId, nick, password, name, lastName, email, phone) {
  const userCreated = await User.create({
    roles_id: rolesId,
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
  const user = await User.findOne({
    where: {
      nick,
      password,
    },
  });

  if (!user) {
    throw new Error('El nick o contraseña son incorrectos');
  }

  const token = jwt.sign({
    id: user.id,
    nick: user.nick,
  }, 'LaClaveEsSecreta');

  return {
    accessToken: token,
  };
}

// Servicio que actualiza datos de un usuario
async function updateUser(id, nick, password, name, lastName, email, phone) {
  const user = await User.findByPk(id);
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
  const userEdited = await user.save();
  return userEdited;
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
