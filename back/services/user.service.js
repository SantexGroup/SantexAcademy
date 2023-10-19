// Los servicios disponibles para usuarios son : Crear un nuevo usuario, actualizar un usuario,
// eliminar un usuario y Login.
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const AuthenticationException = require('../exceptions/authentication.exceptions');
const { Profile, User } = require('../models');
const transporter = require('./toolServices/mailSender');
const download = require('./toolServices/download.services');

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
      pictureLink: user.pictureLink,
      rolesId: user.rolesId,
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
async function updateUser(
  id, updateData,
) {
  // Buscar al usuario en la base de datos por su ID
  const user = await getUser(id);
  await user.update(updateData);
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

async function mailReset(email) {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  const jwtSecret = process.env.JWT_SECRET;
  const expiresIn = 3000;

  const token = jwt.sign({
    id: user.id,
    nick: user.nick,
    email: user.email,
  }, jwtSecret, { expiresIn });

  if (user) {
    const sendMail = await transporter.sendMail({
      from: `CV-ASSISTANT ${process.env.EMAIL}`,
      to: email,
      subject: 'Recuperacion de contraseña',
      text: 'Esto es una prueba',
      html: `<h1>Hola ${user.name} ${user.lastName} </br></h1>
            <p> Podras realizar el cambio de contraseña
            en el siguiente enlace: <a href="${process.env.URL}/user/password/${token}">Cambiar contraseña</a></p>`,
    });
    return sendMail;
  }
  throw Error('Datos de usuario invalido');
}

async function passwordReset(token, newPassword) {
  const jwtSecret = process.env.JWT_SECRET;
  const isValidToken = jwt.verify(token, jwtSecret);

  if (Date.now() >= isValidToken.exp * 1000) {
    throw Error('Tu enlace para reiniciar la clave ha caducado');
  } else {
    const user = await User.findByPk(isValidToken.id);

    await user.update({
      password: newPassword,
    });
  }
}

/* Gestion de imagenes */
async function profileImage(url, id) {
  await download(url, id, () => {
    console.log('descarga completa');
  });
}

async function imageGet(name) {
  const image = (path.join(__dirname, '..', '/public/download', name));
  return image;
}

async function imageDelete(name) {
  fs.unlinkSync(path.join(__dirname, '..', '/public/download', name));
}

// Exportamos el servicio para inyectar en el controlador
module.exports = {
  recordUser,
  updateUser,
  login,
  getUser,
  deleteUser,
  mailReset,
  passwordReset,
  profileImage,
  imageGet,
  imageDelete,
};
