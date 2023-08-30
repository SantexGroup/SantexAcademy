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
    // recibimos un token
    const token = req.headers["x-access-token"];

    // verificamos si existe.
    if (!token)
      return res.status(403).json({ message: "I do not provide the token" });

    // si existe, extraemos lo que esta dentro del token
    const decoded = jwt.verify(token, process.env.SESSION_SECRET);



    // creamos un objeto con los datos del usuario que se logueo
    const userData = {
      email: decoded.email,
      password: decoded.password
    }

    console.log(userData)

    // guardamos el id del usuario en una variable de request
    req.userId = userData.userId;

    // busco ese usuario con ese id del token que lo almacene en req.userId
    const userFound = await Usuario.findByPk(req.userId, { password: 0 });

    // verifico si existe un usuario con ese id del token
    if (userFound){
      next();
    }
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};

module.exports = { authenticateJWT, verifyToken  }






