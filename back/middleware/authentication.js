const passport = require('passport');

const isAuthenticatedVoluntario = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user || info.tipo !== 'voluntario') {
      const error = ('Usuario no autorizado');
      return next(error);
    }
    req.usuario = user;
    next();
  })(req, res, next);
};

const isAuthenticatedOrganizacion = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user || info.tipo !== 'organizacion') {
      const error = ('Usuario no autorizado');

      return next(error);
    }
    req.usuario = user;
    next();
  })(req, res, next);
};

module.exports = { isAuthenticatedVoluntario, isAuthenticatedOrganizacion };
