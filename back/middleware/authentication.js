const passport = require('passport');

const isAuthenticatedVoluntario = async (req, res, next) => {
  try {
    // eslint-disable-next-line consistent-return
    await passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err || !user || user.rols[0].name !== 'voluntario') {
        const error = new Error('Usuario no autorizado');
        error.status = 401;
        return next(error);
      }
      req.usuario = user;
      next();
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

const isAuthenticatedOrganizacion = async (req, res, next) => {
  try {
    // eslint-disable-next-line consistent-return
    await passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err || !user || user.rols[0].name !== 'organizacion') {
        const error = new Error('Usuario no autorizado');
        error.status = 401;
        return next(error);
      }
      req.usuario = user;
      next();
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

const isAuthenticatedAdmin = async (req, res, next) => {
  try {
    // eslint-disable-next-line consistent-return
    await passport.authenticate('jwt', { session: false }, (err, user) => {
      if (err || !user || user.rols[0].name !== 'admin') {
        const error = new Error('Usuario no autorizado');
        error.status = 401;
        return next(error);
      }
      req.usuario = user;
      next();
    })(req, res, next);
  } catch (err) {
    next(err);
  }
};

module.exports = { isAuthenticatedVoluntario, isAuthenticatedOrganizacion, isAuthenticatedAdmin };
