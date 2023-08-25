const passport = require('passport');
require('dotenv').config();
const passportJWT = require('passport-jwt');
const {Usuario} = require('../models');
const ExtractJWT = passportJWT.ExtractJwt;
const JWTStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SESSION_SECRET
};

const jwtStrategy = new JWTStrategy(jwtOptions, async (jwtPayload, done) => {
  try {
    const user = await Usuario.findByPk(jwtPayload.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
});

passport.use(jwtStrategy);

module.exports = passport;
