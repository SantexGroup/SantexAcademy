const { ExtractJwt, Strategy } = require('passport-jwt');
const userService = require('../services/user.services');

async function authenticateRequest(request, jwtPayload, done) {
  // Extract User ID from Payload, then find User.
  try {
    const user = await userService.getOne({ id: jwtPayload.userId });
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
