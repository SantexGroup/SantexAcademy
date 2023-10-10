const jwt = require('jsonwebtoken');

// Este middleware verifica si el token JWT es válido y, si lo es, agrega el usuario o profesor a la solicitud (req).
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token de autenticación no proporcionado' });
  }

  jwt.verify(token, 'tu_clave_secreta', (error, usuarioOProfesor) => {
    if (error) {
      return res.status(403).json({ mensaje: 'Token de autenticación no válido' });
    }

    req.usuarioOProfesor = usuarioOProfesor;
    next(); // Llama a la siguiente función en la cadena de middleware
  });
}


module.exports = authenticateToken;