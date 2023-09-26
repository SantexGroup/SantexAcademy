const jwt = require("jsonwebtoken");
require("dotenv").config();

const { Usuario } = require("../models");
const { Organizacion } = require("../models");
const config = process.env.SESSION_SECRET;

//Middleware para autenticar el usuario con rol admin

const isAdmin = async (req, res, next) => {
  try {
    // Asegúrate de que req.userId contenga el ID del usuario (puedes usar el middleware verifyTokenUser para esto).

    // Obtén el usuario desde la base de datos usando el ID
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
      return res
        .status(403)
        .json({ message: "No tienes permiso de administrador" });
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

    //console.log("decoded: " + JSON.stringify(decoded, null, 2));

    let user = null;
    let org = null;

    if (decoded.userEmail) {
      // Si el token contiene "userEmail", es un token de usuario
      user = await Usuario.findOne({ where: { email: decoded.userEmail } });
      req.userId = decoded.userId;
    } else if (decoded.orgEmail) {
      // Si el token contiene "orgEmail", es un token de organización
      org = await Organizacion.findOne({ where: { email: decoded.orgEmail } });

      // Extraer el ID de la organización del token (si se encuentra)
      req.orgId = decoded.orgId;
    }

    if (user) {
      // Si se encontró en Usuario, establecer req.user
      req.user = user;
      // Asignamos el userId al req.userId para poder usarlo en los siguientes middlewares
      req.userId = decoded.userId;
      req.modelType = "Usuario"; // Indicar el modelo al que pertenece
    } else if (org) {
      // Si se encontró en Organizacion, establecer req.org
      req.org = org;
      req.modelType = "Organizacion"; // Indicar el modelo al que pertenece
    } else {
      // Si no se encontró en ninguno, devolver Unauthorized
      return res.status(401).json({ message: "Unauthorized " });
    }

    // Continuar con la siguiente función en la cadena de middleware
    next();
  } catch (error) {
    console.error("Error en verifyToken:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

const isUser = (req, res, next) => {
  if (req.modelType === "Usuario") {
    next();
  } else {
    return res
      .status(403)
      .json({ message: "No tienes permiso para realizar esta acción" });
  }
};

const isOrg = (req, res, next) => {
  const idOrgParam = req.orgId;

  if (req.modelType === "Organizacion" ) {
    return next(); // El modelo es de tipo "Organizacion"
  }

  return res
    .status(403)
    .json({ message: "No tienes permiso para realizar esta acción" });
};

module.exports = { isAdmin, verifyToken, isUser, isOrg };
