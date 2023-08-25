const passport = require('passport');

const isAuthenticated = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user, info) => {
        console.log('Validando autenticacion');

        if (err || !user) {
            const error = new Error("Debe iniciar sesión para efectuar esta operación");
            return next(error);
        }

        next();
})(req, res, next);
}

module.exports = { isAuthenticated };