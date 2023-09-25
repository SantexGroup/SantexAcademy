// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const AuthenticationException = require('../exceptions/authentication.exceptions');
const { Profile, User } = require('../models');

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
    const profile = await Profile.create({
      userId: userCreated.id,
      profileName: 'Profile Inicial',
    });
    return {
      user: {
        name: userCreated.name,
        lastName: userCreated.lastName,
      },
      profile,
    };
  }
  throw new Error(); // Re-lanzamos el error para que el llamador lo maneje adecuadamente
}

//* Servicio que autoriza login
async function login(nick, password) {
  // Buscar al usuario en la base de datos por su nick y contraseña
  const user = await User.findOne({
    where: {
      nick,
    },
  });

  // Si no se encuentra el usuario o la contraseña no es correcta,
  // lanzar un error indicando que las credenciales son incorrectas
  if (!user || !await user.checkPassword(password)) {
    throw new AuthenticationException('El nick o contraseña son incorrectos');
  }

  const profile = await Profile.findOne({
    where: {
      userId: user.id,
    },
    order: [
      ['id', 'ASC'],
    ],
  });

  const jwtSecret = process.env.JWT_SECRET;
  const expiresIn = 7200;

  const token = jwt.sign({
    id: user.id,
    nick: user.nick,
    profileId: profile.id,
  }, jwtSecret, { expiresIn });
  // Devolver un objeto con el token de acceso
  return {
    user: {
      name: user.name,
      lastName: user.lastName,
    },
    profile,
    accessToken: token,
  };
}

//* agregado
async function getUser(id) {
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('El ID del usuario no existe en la base de datos');
  }

  return user;
}

// Servicio que actualiza datos de un usuario
async function updateUser(id, data) {
  // Buscar al usuario en la base de datos por su ID
  const user = await User.findByPk(id);

  if (!user) {
    throw new Error('El ID del usuario no existe en la base de datos');
  }
  // Guardar el usuario actualizado
  //* Se edita funcion
  return user.update(data);

  // if (email !== ' '){
  //   //* El correo fue cambiado, se debe actualizar
  //   const userEdited = await user.update({
  //     name,
  //     lastName,
  //     email,
  //     phone,
  //     bornDate,
  //     pictureLink,
  //   });

  //   return userEdited;
  // } else {
  //   //* No se actualiza el correo, solo los demas campos
  //   const userEdited = await user.update({
  //     name,
  //     lastName,
  //     phone,
  //     bornDate,
  //     pictureLink,
  //   });

  //   return userEdited;
  // }
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
  getUser,
  deleteUser,
};
