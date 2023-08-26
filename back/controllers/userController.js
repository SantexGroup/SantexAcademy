const jwt = require('jsonwebtoken');
const userService = require('../services/userService');
require('dotenv').config();

async function login(req, res, next) {
  const { username, password } = req.body;

  try {
    const user = await userService.authenticateUser(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        userId: user.id,
        userName: user.username,
        rol: user.rol,
      },
      secretKey,
      {
        expiresIn: '1d',
      },
    );

    return res.status(200).json({
      message: `Credenciales válidas, acceso al usuario: ${username}`,
      token,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const userDetails = req.body;
  try {
    const user = await userService.registerUser(userDetails);
    return res
      .status(201)
      .json({ message: 'Usuario registrado exitosamente', user });
  } catch (error) {
    next(error);
  }
}

async function getUsers(req, res) {
  try {
    const users = await userService.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al traer todos los usuarios' });
  }
}

async function getUserById(req, res) {
  try {
    const { id } = req.params;
    const user = await userService.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al traer user por su id' });
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const newData = req.body;
  try {
    const updatedUser = await userService.updateUser(id, newData);
    res.status(200).json(updatedUser);
  } catch (error) {
    throw new Error(
      `Error al actualizar el usuario con id ${id}: ${error.message}`,
    );
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json({ message: `Se ha borrado el registro con id ${id}` });
  } catch (error) {
    res.status(500).json({
      message: `Error al intentar borrar el registro con id: ${req.params.id}`,
    });
  }
}

async function restoreUser(req, res, next) {
  const { id } = req.params;

  try {
    const restoredUser = await userService.restoreUser(id);

    if (!restoredUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.status(200).json({ message: 'Usuario restaurado con éxito', user: restoredUser });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  restoreUser,
};
