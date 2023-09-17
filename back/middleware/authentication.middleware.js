const passport = require('passport');
const passportJwt = require('passport-jwt');

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const SECRET = process.env.SESSION_SECRET;
// const userProvider = require('../providers/userProvider');

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

const adminCheck = async (req, res) => {
  if (req.user.admin === 1) {
    res.next();
  }
  res.status(401).json({ error: 'Admin credentials required' });
};

module.exports = { SECRET, authMW, adminCheck };
