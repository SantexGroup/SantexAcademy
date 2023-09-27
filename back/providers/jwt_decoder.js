const { jwtVerify } = require('jose');
const CustomException = require('../exceptions/custom.exeption');

const { JWT_PRIVATE_KEY } = process.env;

const JWTDecoder = (req, res, next) => {
  (async () => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new CustomException('Usuario no autorizado', 401);
    }

    const jwt = authorization.split(' ')[1];
    if (!jwt) throw new CustomException('Usuario no autorizado', 401);

    try {
      const secret = new TextEncoder().encode(JWT_PRIVATE_KEY);
      const { payload } = await jwtVerify(jwt, secret);

      if (!payload) throw new CustomException('Usuario no autorizado', 401);

      res.locals.userId = payload.id;

      next();
    } catch (error) {
      next({
        extendBase: true,
        status: error.statusCode || 500,
        message: `Error de autorización: ${error.message || error}`,
      });
    }
  })();
};

module.exports = JWTDecoder;
