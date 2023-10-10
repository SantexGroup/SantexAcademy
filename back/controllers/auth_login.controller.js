const findEntityByProperty = require('../services/find_entity_by_property.service');
const validateUserPassword = require('../utils/validate_user_password.util');
const handleJWT = require('../services/handle_jwt.service');
const { User } = require('../models');

const authLoginController = (req, res, next) => {
  (async () => {
    const { email, password } = req.body;

    try {
      const existingUser = await findEntityByProperty({ email }, User);

      await validateUserPassword(password, existingUser.password);

      const jwt = await handleJWT(existingUser.id);

      res.send({
        id: existingUser.id,
        email: existingUser.email,
        jwt,
      });
    } catch (error) {
      next({
        extendBase: true,
        status: error.statusCode || 500,
        message: error.message || 'Error interno del servidor',
      });
    }
  })();
};

module.exports = authLoginController;
