const passporJwt = require('passport-jwt');
const { User } = require('../../models');

const ExctractJwt = passporJwt.ExtractJwt;
const StrategyJwt = passporJwt.Strategy;

/**
 * Define una estrategia de autenticacion JWT. Se utiliza el objeto
 * ExtractJwt para extraer el token de la solicitud HTTP y utiliza
 * clave secreta (JWT_SECRET) para verificar la firma del token.
 * Si la verificacion es exitosa, se busca el usuario en la DB con
 * el id almacenado en el token. Si se encuenta el usuario se llama
 * a next(false, user, null) caso contrario se indica que hay un error
 * llamando a next(true, null, null)
 *
 */
const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (jwtPayload, next) => {
  const user = await User.findByPk(jwtPayload.id);

  if (user) {
    next(false, user, null);
  } else {
    next(true, null, null);
  }
});

module.exports = PassportStrategy;
