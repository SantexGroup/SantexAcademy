// eslint-disable-next-line import/no-unresolved
const { validationResult } = require('express-validator');
const userService = require('../services/userService');

// const { userService } = services;
const getUser = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const idUser = req.params.idUser;
  try {
    const user = await userService.getUser(idUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array });
  }
  // eslint-disable-next-line object-curly-newline
  const { nombre, apellido, nombreusuario, contrasena, email, role, cel } = req.body;
  try {
    const newUser = await userService.createUser({
      nombre,
      apellido,
      nombreusuario,
      contrasena,
      email,
      role,
      cel,
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getUsers = async (req, res) => {
  const { nombre, apellido, role } = req.query;
  try {
    let users;
    if (nombre !== undefined && apellido !== undefined && role !== undefined) {
      // eslint-disable-next-line spaced-comment
      //if(nombre!== undefined) {
      users = await userService.getUsers({
        ...(nombre && { nombre }),
        ...(apellido && { apellido }),
        ...(role && { role }),
      }); // Esto sólo va a agregar los campos si vinieron en la query
    } else {
      users = await userService.getUsers();
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const idUser = req.params.idUser;
  try {
    const user = await userService.deleteUser(idUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// eslint-disable-next-line consistent-return
const updateUser = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const idUser = req.params.idUser;
  const result = validationResult(req);
  // eslint-disable-next-line keyword-spacing, space-before-blocks
  if (!result.isEmpty()) {
    return res.status(400).send({ errors: result.array });
  }
  // eslint-disable-next-line object-curly-newline
  const { nombre, apellido, nombreusuario, contrasena, email, role, cel } = req.body;
  try {
    // eslint-disable-next-line no-undef
    const newUser = await userService.updateUser(idUser, {
      nombre,
      apellido,
      nombreusuario,
      contrasena,
      email,
      role,
      cel,
    });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUser,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
