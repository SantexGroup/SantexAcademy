// const passport = require('passport');
const passport = require('passport');
// const { NotAuthorized } = require('../exceptions/not-authorized.exceptions');

/**
 * Middleware de autenticacion que utiliza passport
 * para verificar is un usuario está autenticado.
 *
 * Se define una funcion de autenticacion como tercer parametro de
 * passport.authenticate, que recibe tres parametros err, user, info.
 * Si hay un error (err) o si no hay usuario (!user), se crea una un error
 * NotAuthorized y se llama a la funcion next.
 *
 * Si la autenticacion es existosa, se llama a la fucnion next
 * para pasar al siguiente middleware
 *
 */
const isAuthenticated = (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('jwt', { session: false }, (err, user) => {
    // console.log('validando autenticacion');
    if (err || !user) {
      // const error = new NotAuthorized('Usuario no autorizado');
      const error = new Error('Usuario no autorizado');

      return next(error);
    }

    next();
  })(req, res, next);
};

module.exports = { isAuthenticated };
