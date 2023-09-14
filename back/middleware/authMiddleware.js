const jwt = require("jsonwebtoken");
require("dotenv").config();

const { Usuario } = require("../models");

const config = process.env.SESSION_SECRET;

//Middleware para autenticar el usuario con rol admin

const isAdmin = async (req, res, next) => {
  try {
    // Asegúrate de que req.userId contenga el ID del usuario (puedes usar el middleware verifyToken para esto).

    // Obtén el usuario desde la base de datos usando el ID
    console.log("req.userId:", req.userId); 
    const user = await Usuario.findByPk(req.userId);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verifica si el usuario tiene el rol de administrador
    if (user.rolesId === 2) {
      // El usuario tiene el rol de administrador, permite la acción
      next();
    } else {
      // El usuario no tiene el rol de administrador, devuelve un error
      return res.status(403).json({ message: "No tienes permiso de administrador" });
    }
  } catch (error) {
    console.error("Error en isAdmin:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};


const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({ message: "Token not provided" });

    const decoded = jwt.verify(token, config);

    const userId = decoded.userId; // Obtener el ID del usuario desde el token

    // Verificar si el ID del usuario en el token coincide con el ID en la URL
    if (userId !== Number(req.params.id)) {
      return res
        .status(403)
        .json({ message: "No tienes permiso para modificar este usuario" });
    }

    // Asignar el ID del usuario a req.userId para que esté disponible en los controladores
    req.userId = userId;

    // Continuar con la siguiente función en la cadena de middleware
    next();
  } catch (error) {
    console.error("Error en verifyToken:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};


module.exports = { isAdmin, verifyToken };
