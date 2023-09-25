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

const authenticatedCheck = (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.status(401).json({ error: 'Autentication failed' });
  }
  next();
};

const adminCheck = async (req, res, next) => {
  if (!req.user.isAdmin) {
    res.status(401).json({ error: 'Admin credentials required' });
  }
  next();
};

module.exports = {
  SECRET, authMW, authenticatedCheck, adminCheck,
};
