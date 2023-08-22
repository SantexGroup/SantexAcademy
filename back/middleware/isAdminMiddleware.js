const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res, next) {
  const auth = req.header('Authorization');
  const secretKey = process.env.SECRET_KEY;
  if (!auth) {
    return res
      .status(401)
      .json({ message: 'Acceso denegado. Se requiere autenticación.' });
  }
  const token = auth.replace('Bearer', ' ').trim();
  try {
    const decodedToken = jwt.verify(token, secretKey);
    if (decodedToken.rol === 'Admin') {
      return next();
    }
    return res
      .status(403)
      .json({ message: 'Acceso denegado. Se requiere rol de administrador.' });
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
