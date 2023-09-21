// const jwt = require('jsonwebtoken');
const { userService } = require("../services");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar credenciales
    const user = await userService.loginUser(email, password);

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" }); // Retorna aquí para evitar el envío doble de respuestas
    }

    // Generar token
    const token = jwt.sign(
      {
        userId: user.id,
        userEmail: user.email,
        userPassword: user.password,
      },
      process.env.SESSION_SECRET,
      { expiresIn: "1h" }
    );

    console.log(token);
    // Envía la respuesta una vez que tengas el token
    return res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const userProfile = await userService.getUserProfile(id);
    res.status(200).json(userProfile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ action: "getUserProfile", error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await userService.createUser(userData);
    res.status(201).json(newUser);
  } catch (err) {
    if (err.message == "Validation error") {
      res.status(409).json({ action: "createUser", error: err.message });
    } else {
      res.status(500).json({ action: "createUser", error: err.message });
    }
  }
};

// Se pasan req.query y req.body por que son los parametros que se pasan por la url y por el body
const getUsersByCriteria = async (req, res) => {
  try {
    const queryOptions = req.query;
    const bodyOptions = req.body;
    const organizations = await userService.getUsersByCriteria(
      queryOptions,
      bodyOptions
    );
    res.json(organizations);
  } catch (err) {
    res.status(500).json({ action: "getUserByCriteria", error: err.message });
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const userId = Number(req.userId);

    console.log("id: " + id);

    // Verificar si el usuario con el ID proporcionado existe
    const existingUser = await userService.getUsersByCriteria(id);
    if (!existingUser) {
      return res.status(404).json({ message: "El usuario no existe." });
    }

    // Comprueba si el ID del usuario en el token coincide con el ID del usuario que se está intentando modificar
    if (id !== userId) {
      return res
        .status(403)
        .json({ message: "No tienes permiso para modificar este usuario" });
    }

    // Actualiza el usuario con los datos enviados en el cuerpo de la solicitud
    const updatedUser = await userService.updateUserById(id, req.body);
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ action: "updateUserById", error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.deleteUserById(id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ action: "deleteUserById", error: err.message });
  }
};

module.exports = {
  loginUser,
  getUserProfile,
  createUser,
  getUsersByCriteria,
  updateUserById,
  deleteUserById,
};
