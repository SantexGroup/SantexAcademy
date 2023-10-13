const jwt = require('jsonwebtoken');

// Este middleware verifica si el token JWT es válido y, si lo es, agrega el usuario o profesor a la solicitud (req).
function validateToken (req, res, next) {
  const headerToken = req.headers['authorization'];
 
  
  if (!headerToken || !headerToken.startsWith('Bearer ')) {
    return res.status(401).json({ mensaje: 'Acceso denegado' });
  }

  const token = headerToken.slice(7); // Elimina "Bearer " del token

  jwt.verify(token, process.env.SECRET_KEY || 'grupo39', (err, decoded) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      return res.status(401).json({ mensaje: 'Token no válido' });
    }
    
    // Agrega los datos decodificados del token a la solicitud para su posterior uso
    req.user = decoded;
    next();
  });
}
  

module.exports = validateToken;