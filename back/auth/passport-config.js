const passportJwt = require('passport-jwt');

const models = require('../models/index');

const ExctractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (jwtPayload, next) => {
  const usuario = await models.usuario.findOne({
    where: {
      email: jwtPayload.email,
    },
    include: [
      {
        model: models.rol,
      },
    ],
  });

  if (usuario === null) {
    next(true, null, null);
  } else {
    next(false, usuario, null);
  }
});

module.exports = PassportStrategy;
