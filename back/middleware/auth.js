/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/no-extraneous-dependencies */
const SERVER_SECRET = process.env.JWT_SECRET;

const passport = require('passport');
const passportJwt = require('passport-jwt');

const JWTStrategy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest:
        ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SERVER_SECRET,
    },
    (jwtPayload, done) => {
      const user = jwtPayload;
      return done(null, user);
    },
  ),
);

const isAdminMdw = (req, res, next) =>
  //   console.log(req.headers.authorization);
  passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }

      if (user.isAdmin === true) {
        return next();
      }

      res.status(403).json({
        error:
          'You are not allowed to perform the action you asked for',
      });
    },
  )(req, res, next);

const isTeacherMdw = (req, res, next) =>
  //   console.log(req.headers.authorization);
  passport.authenticate(
    'jwt',
    { session: false },
    (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }

      if (user.isTeacher === true) {
        return next();
      }

      res.status(403).json({
        error:
          'You are not allowed to perform the action you asked for',
      });
    },
  )(req, res, next);

module.exports = {
  isAdminMdw,
  isTeacherMdw,
};
