const passport = require('passport');
const AuthenticationException = require('../exceptions/authentication.exceptions');

/**
 * Middleware de autenticacion que utiliza passport
 * para verificar is un usuario está autenticado.
 *
 * Se define una funcion de autenticacion como tercer parametro de
 * passport.authenticate. Si hay un error (err) o si no hay usuario (!user),
 * se crea una una exception AuthenticationException y se llama a la funcion next.
 *
 * Si la autenticacion es existosa, se llama a la fucnion next
 * para pasar al siguiente middleware
 *
 * Para proteger una ruta:
 * 1. Se importa el middleware isAuthenticated
 *    desde el archivo ../middleware/authentication.middleware
 * 2. Se utiliza el middleware en la ruta protegida,
 *    pasándolo como segundo argumento después del path y antes del controlador
 * ej:
 * const isAuthenticated = require('../middleware/authentication.middleware');
 * router.get('/ruta-protegida', isAuthenticated, controller);
 *
 * De esta forma, el middleware se ejecutará antes de que se ejecute el controlador de la ruta.
 * Si el usuario está autenticado y el token JWT es válido, la ejecución continuará
 * hacia el controlador de la ruta. De lo contrario, si el usuario no está
 * autenticado o el token es inválido, se ejecutará el siguiente middleware definido con el error.
 */
const isAuthenticated = (req, res, next) => {
  // eslint-disable-next-line consistent-return, no-unused-vars
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      const error = new AuthenticationException();

      return next(error);
    }

    next();
  })(req, res, next);
};

module.exports = isAuthenticated;
