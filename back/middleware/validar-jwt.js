const jwt = require('jsonwebtoken');

const validarJWT = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'error en el token',
    });
  }

  try {
    const { id, username } = jwt.verify(token, process.env.SESSION_SECRET);

    // console.log( id, username);

    req.id = id;
    req.username = username;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
    });
  }
  return next();
};

module.exports = {
  validarJWT,
};
