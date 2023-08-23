const passport = require('passport');
const passportJwt = require('passport-jwt');
require('dotenv').config();

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const secretKey = process.env.SECRET_KEY;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: secretKey,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    },
  ),
);

const authMiddleware = passport.authenticate('jwt', { session: false });

module.exports = authMiddleware;
