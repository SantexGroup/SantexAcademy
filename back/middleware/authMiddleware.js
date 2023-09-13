const jwt = require('jsonwebtoken');
require('dotenv').config();
const  {Usuario} = require('../models');


const config = process.env.SESSION_SECRET;

const authenticateJWT = (req, res, next) => {

    const token =
      req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }

    try {
      const decoded = jwt.verify(token, config);
      req.user = decoded;
    } catch (error) {
      return res.status(401).send('Invalid Token');
    }
    return next();
  }


  const verifyToken = async (req, res, next) => {
    try {
      const token = req.headers["x-access-token"];
  
      if (!token)
        return res.status(403).json({ message: "Token not provided" });
  
      const decoded = jwt.verify(token, process.env.SESSION_SECRET);
  
      const userId = decoded.userId; // Obtener el ID del usuario desde el token
  
      // Verificar si el ID del usuario en el token coincide con el ID en la URL
      if (userId !== Number(req.params.id)) {
        return res.status(403).json({ message: "No tienes permiso para modificar este usuario" });
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
  
  module.exports = verifyToken;
  


  

module.exports = { authenticateJWT, verifyToken  }






