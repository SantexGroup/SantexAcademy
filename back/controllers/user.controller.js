// Importacion de userService para inyectar en el controlador.

const bcrypt = require('bcrypt');
const userService = require('../services/user.service');
//
// controlador que redirige al servicio para registrar un usuario
async function recordUser(req, res) {
  const {
    /*  Extraer los datos del cuerpo de la solicitud */
    rolesId,
    nick,
    password,
    name,
    lastName,
    email,
    phone,
  } = req.body;

  const salt = await bcrypt.genSalt();
  const passwordCrypt = await bcrypt.hash(password, salt);

  // Llamas al servicio para registrar un usuario
  const user = await userService.recordUser(rolesId, nick, passwordCrypt, name, lastName, email,
    phone);
  // Enviar respuesta con el usuario registrado
  res.status(200).send(user);
}

// Controlador que redirige al servicio para Login

async function login(req, res, next) {
  const {
    // Extraer el nick y password de la solicitud
    nick,
    password,
  } = req.body;
  try {
    // LLamar al service para hacer el login de un usuario
    const result = await userService.login(nick, password);
    res.status(201).send(result);
  } catch (error) {
    // en caso de error, lanzarlo
    next(error);
  }
}

//* agregado
async function getUser(req, res, next) {
  const { id } = req.params;

  try {
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

// Controlador que redirige al servicio para actulizar un usuario
async function updateUser(req, res, next) {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const userUpdate = await userService.updateUser(id, updateData);
    res.status(200).send(userUpdate);
  } catch (error) {
    next(error);
  }
}

async function userDeleted(req, res, next) {
  const { id } = req.params;
  try {
    await userService.deleteUser(id);
    res.status(201).send('Usuario eliminado correctamente');
  } catch (error) {
    next(error);
  }
}

async function resetMail(req, res, next) {
  const { email } = req.body;
  try {
    await userService.mailReset(email);
    res.status(200).json({ message: 'Se envio corrreo correctamente' });
  } catch (error) {
    next(error);
  }
}

async function resetPage(req, res) {
  res.render('page');
}

async function resetPassword(req, res, next) {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt();
    const passwordCrypt = await bcrypt.hash(password, salt);

    await userService.passwordReset(token, passwordCrypt);
    res.status(200).send();
  } catch (error) {
    next(error);
  }
}

async function imageUrl(req, res, next) {
  const { url } = req.body;
  const { id } = req.params;
  try {
    await userService.profileImage(url, id);
    res.status(200).json({ message: 'Descarga completa' });
  } catch (error) {
    next(error);
  }
}

/* Gestion de imagenes */
async function imageProfile(req, res, next) {
  const { name } = req.params;

  try {
    const image = await userService.imageGet(name);
    res.status(200).sendFile(image);
  } catch (error) {
    next(error);
  }
}

async function deleteImage(req, res, next) {
  const { name } = req.params;

  try {
    await userService.imageDelete(name);
    res.status(200).json({ message: 'Imagen Eliminada' });
  } catch (error) {
    next(error);
  }
}

// Modulos a exportar para inyectar en routes
module.exports = {
  recordUser,
  updateUser,
  getUser, //* agregado
  login,
  userDeleted,
  resetMail,
  resetPage,
  resetPassword,
  imageUrl,
  imageProfile,
  deleteImage,
};
