import { jwtVerify } from 'jose';

const { JWT_PRIVATE_KEY } = process.env;

const JWTDecoder = (req, res, next) => {
  (async () => {
    const { authorization } = req.headers;
    if (authorization === undefined) {
      next({
        extendBsae: true,
        status: 401,
        message: 'Usuario no  autorizado',
      });
    }

    const jwt = authorization.split(' ')[1];
    if (jwt === undefined) {
      next({
        extendBsae: true,
        status: 401,
        message: 'Usuario no  autorizado',
      });
    }

    try {
      const encoder = new TextEncoder();
      const { payload } = await jwtVerify(jwt, encoder.encode(JWT_PRIVATE_KEY));

      res.locals.userId = payload.id;

      next();
    } catch (error) {
      next({
        extendBsae: true,
        status: 401,
        message: 'Usuario no  autorizado',
      });
    }
  })();
};

export default JWTDecoder;
