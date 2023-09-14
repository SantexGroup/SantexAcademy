const { validationResult } = require('express-validator');

const { userService, emailService } = require('../services');
const { codeGenerator } = require('../helpers/codeGenerator');

const allUser = async (req, res, next) => {
  try {
    const users = await userService.allUser();
    res.status(201).json(users);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  const { body } = req;
  body.verificationCode = false;// Establece false en la verificacion de email hasta que se realice
  body.codeRegister = codeGenerator();// Agrega un codigo unico para verificacion de email
  const userCode = req.body.codeRegister;
  const userEmail = req.body.email;
  const verificationLink = `http://localhost:4200/user/verifyLink?codeRegister=${userCode}`;//Se crea link para respuesta
  try {
    const user = await userService.createUser(body);
    // eslint-disable-next-line no-console
    // eslint-disable-next-line max-len
    await emailService.sendMail(user, userCode, userEmail, verificationLink);// Envia a emailService
    return res.json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: 'Error en el registro en controllers' });
  }
};

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  const { email, password } = req.body;
  console.log(email, password);
  return res.json({
    ok: true,
    msg: 'Login de usuario /',
  });
};

const revalidarToken = async (req, res) => res.json({
  ok: true,
  msg: 'Renew',
});

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await userService.updateUser(id, body);
    res.status(200).json(user);
    return;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUser(id);
    res.json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
  allUser,
  getUser,
  createUser,
  login,
  revalidarToken,
  updateUser,
  deleteUser,
};
