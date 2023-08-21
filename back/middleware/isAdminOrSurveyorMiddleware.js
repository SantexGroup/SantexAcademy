const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const auth = req.header('Authorization');
  if (!auth) {
    return res
      .status(401)
      .json({ message: 'Acceso denegado. Se requiere autenticación.' });
  }
  const token = auth.replace('Bearer', ' ').trim();
  try {
    const decodedToken = jwt.verify(token, 'secret');
    if (decodedToken.rol === 'Admin' || decodedToken.rol === 'Encuestador') {
      return next();
    }
    return res
      .status(403)
      .json({ message: 'Acceso denegado. Se requiere rol de administrador o encuestador.' });
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido.' });
  }
};
