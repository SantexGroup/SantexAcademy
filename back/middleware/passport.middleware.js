const { ExtractJwt, Strategy } = require('passport-jwt');
const userProvider = require('../providers/user.providers');
const logger = require('../utils/winston.logger');

async function authenticateRequest(request, jwtPayload, done) {
  // Extract User ID from Payload, then find User.
  try {
    logger.api.info(jwtPayload);
    const user = await userProvider.getOne({ id: jwtPayload.userId });
    if (user) {
      return done(null, user);
    }
  } catch (err) {
    return done(err, false);
  }
  return done(null, false);
}

function passportMiddleware(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_ENCRYPTION_TOKEN,
    passReqToCallback: true,
  };

  // Check JWT Integrity, then use custom method.
  passport.use(new Strategy(opts, authenticateRequest));
}

module.exports = passportMiddleware;
