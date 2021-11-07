const Express = require('express');
const Passport = require('passport');
const userController = require('../controllers/user.controllers');
require('../middleware/passport.middleware')(Passport);
const UserValidator = require('../middleware/validations/users/user.validations.middleware');
const Validator = require('../middleware/validation.middleware');

const app = Express();

app.post('/login', [
  UserValidator.validate('login'),
  Validator.checkValidationResult,
],
userController.login,
);

app.post('/', [
  UserValidator.validate('register'),
  Validator.checkValidationResult,
],
userController.newUser,
);

// users/info/1
app.get('/info/:id', [
  Passport.authenticate('jwt', { session: false }),
],
userController.userInfo,
);

// users/edit/1
app.put('/edit/:id', [
  Passport.authenticate('jwt', { session: false }),
],
userController.editUser,
);

module.exports = app;
