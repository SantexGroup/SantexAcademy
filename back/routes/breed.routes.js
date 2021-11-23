const Express = require('express');
const Passport = require('passport');
const breedController = require('../controllers/breed.controllers');
require('../middleware/passport.middleware')(Passport);

const app = Express();

app.get(
  '/',
  [Passport.authenticate('jwt', { session: false })],
  breedController.listAllBreeds
);

module.exports = app;