// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const { User } = require('../models');

//
//
// Servicio que recupera los datos ingresados y los guarda para crear un usuario.

// const recordUser = async (req, res) => {
//   const {
//     body,
//   } = req;
//   try {
//     await User.create(body);
//     res.status(201).json({
//       msg: 'Usuario creado correctamente',
//     });
//   } catch (error) { // Si hay un error lo capturamos
//     console.log(error);
//     res.status(401).json({
//       msg: 'Ups, algo salio mal',
//     });
//   }
// };

async function recordUser(rolesId, nick, password, name, lastName, email, phone) {
  try {
    const userCreated = await User.create({
      roles_id: rolesId,
      nick,
      password,
      name,
      lastName,
      email,
      phone,
    });

    return userCreated;
  } catch (error) {
    console.error('Error al guardar el usuario:', error);
    throw error; // Re-lanzamos el error para que el llamador lo maneje adecuadamente
  }
}

/*
async function recordUser(id, nick, password, name, lastName, email, phone, rolesId, deleted) {
  const user = new User();
  user.id = id;
  user.roles_id = rolesId;
  user.nick = nick;
  user.password = password;
  user.name = name;
  user.lastname = lastName;
  user.email = email;
  user.phone = phone;
  user.deleted = deleted || false;

  const userCreated = await user.save();
  return userCreated;
}
*/

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
