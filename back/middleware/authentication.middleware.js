const passport = require('passport');
const passportJwt = require('passport-jwt');

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const SECRET = process.env.SESSION_SECRET;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    },
  ),
);

const authMW = passport.authenticate('jwt', { session: false });

// eslint-disable-next-line consistent-return
const adminCheck = (req, res, next) => {
  if (req.isAuthenticated() && req.user.admin === true) {
    return next();
  }
  res.status(401).json({ error: 'Admin credentials required' });
};

module.exports = { SECRET, authMW, adminCheck };
