const passportJwt = require('passport-jwt');

const models = require('../models/index');

const ExctractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt({
  jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
}, async (jwtPayload, next) => {
  if (jwtPayload.tipoUsuario === 'voluntario') {
    const voluntario = await models.volunteer.findByPk(jwtPayload.id);
    if (voluntario) {
      const info = {
        tipo: 'voluntario',
      };

      next(false, voluntario, info);
    } else {
      next(true, null, null);
    }
  } else if (jwtPayload.tipoUsuario === 'organizacion') {
    const organizacion = await models.coordinator.findByPk(jwtPayload.id);

    if (organizacion) {
      const info = {
        tipo: 'organizacion',
      };
      next(false, organizacion, info);
    } else {
      next(true, null, null);
    }
  } else if (jwtPayload.tipoUsuario === 'admin') {
    const admin = await models.admin.findByPk(jwtPayload.id);

    if (admin) {
      const info = {
        tipo: 'admin',
      };
      next(false, admin, info);
    } else {
      next(true, null, null);
    }
  } else {
    next(true, null, null);
  }
});

module.exports = PassportStrategy;
