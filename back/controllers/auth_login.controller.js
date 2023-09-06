const findUserByEmail = require('../services/find_user_by_email.service');
const handleJWT = require('../services/handle_jwt.service');
const logger = require('../utils/winston.logger');
const validateUserPassword = require('../validations/validate_user_password.service');

const authLoginController = async (req, res, next) => {
  (async () => {
    const { email, password } = req.body;

    try {
      const existingUser = await findUserByEmail(email);
      if (existingUser === null) {
        next({
          extendBase: true,
          status: 401,
          message: 'Credenciales Invalidas',
        });
      }

      const checkPassword = await validateUserPassword(
        password,
        existingUser.password,
      );
      if (!checkPassword) {
        next({
          extendBase: true,
          status: 401,
          message: 'Credenciales Invalidas',
        });
      }

      const jwt = await handleJWT(existingUser.id);

      res.send({
        email: existingUser.email,
        name: existingUser.name,
        jwt,
      });
    } catch (error) {
      logger.api.error(error);

      next({
        extendBase: true,
        status: 401,
        message: 'Error al intentar iniciar sesión',
      });
    }
  })();
};

module.exports = authLoginController;
