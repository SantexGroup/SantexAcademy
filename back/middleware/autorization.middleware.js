/**
 * Middleware de autorizacion.
 *
 * Si la autorizacion es existosa, se llama a la fucnion next
 * para pasar al siguiente middleware
 *
 */
const isAdmin = (req, res, next) => {
  next();
};

module.exports = isAdmin;
