const userService = require('../services/userService');

const createAUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ action: 'create a user', error: 'something when wrong' });
  }
};

const logIn = (req, res) => {
  res.json({
    response: 'hola soy un loggin',
  });
};

const getUser = (req, res) => {
  res.json({
    response: 'hola soy un usuario',
  });
};

const getAllUsers = (req, res) => {
  res.json({
    response: 'devuelve todos los usuarios',
  });
};

const modifyUser = (req, res) => {
  res.json({
    response: 'modifico un usuario',
  });
};

const deleteUser = (req, res) => {
  res.json({
    response: 'elimino un usuario',
  });
};

module.exports = {
  createAUser,
  logIn,
  getUser,
  getAllUsers,
  modifyUser,
  deleteUser,

};
