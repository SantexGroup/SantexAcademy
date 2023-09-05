// eslint-disable-next-line import/no-extraneous-dependencies
const passportJwt = require('passport-jwt');
const { Admin } = require('../models');

const ExctractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

const PassportStrategy = new StrategyJwt(
  {
    jwtFromRequest: ExctractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'ClaveSecreta',
  },
  async (jwtPayload, next) => {
    const user = await Admin.findByPk(jwtPayload.id);

    if (user) {
      next(false, user, null);
    } else {
      next(true, null, null);
    }
  },
);

module.exports = PassportStrategy;
