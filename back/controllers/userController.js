const userService = require('../services/userService');

const createAUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json({ action: 'create a user', error: 'something when wrong' });
  }
};

const getUser = async (req, res) => {
  try {
    const searchUser = await userService.findUserById(req.params.userId);
    if (searchUser) {
      res.json(searchUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const logIn = async (req, res) => {
  try {
    const searchUser = await userService.loginUser(req.body);
    if (searchUser) {
      res.status(200).json('Login exitoso');
    } else {
      res.status(404).json({ message: 'El usuario no existe o la contraseña es incorrecta' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const searchUser = await userService.findUsers();
    if (searchUser) {
      res.json(searchUser);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const modifyUser = async (req, res) => {
  try {
    const newUser = req.body;
    const updatedUser = await userService.modifyAUser(req.params.userId, newUser);
    if (updatedUser[0] !== 0) {
      res.status(200).json({ message: 'Usuario actualizado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const deleteAUser = async (req, res) => {
  try {
    const id = req.params.userId;
    const toDelete = await userService.deleteById(id);
    if (toDelete) {
      res.status(200).json({ message: 'Usuario eliminado exitosamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = {
  createAUser,
  logIn,
  getUser,
  getAllUsers,
  modifyUser,
  deleteAUser,

};
