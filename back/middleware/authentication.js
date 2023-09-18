const passport = require('passport');

const isAuthenticated = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    console.log('Validando autenticacion');

    if (err || !user) {
      return res.status(401).send('Debe iniciar sesión para efectuar esta operación');
    }

    return next();
  })(req, res, next);
};

module.exports = { isAuthenticated };
