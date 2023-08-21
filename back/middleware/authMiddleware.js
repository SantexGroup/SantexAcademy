const passport = require('passport');
const passportJwt = require('passport-jwt');

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secret = 'secret';

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secret,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    },
  ),
);

const authMiddleware = passport.authenticate('jwt', { session: false });

module.exports = authMiddleware;
