const Express = require('express');
const Passport = require('passport');
const petController = require('../controllers/pet.controllers');
require('../middleware/passport.middleware')(Passport);

const app = Express();

//La URL debe envial un parametro userId para filtrar los perros segun el usuario que realiza la consulta
//ademas debe pasar por queryParams la pagina de resultados que desea ver
app.get(
  //se le debe pasar tambien como query el numenro de la pagina a mostar (?page=n)
  '/:id',
  //   [Passport.authenticate('jwt', { session: false })],
  petController.listPets
);

module.exports = app;
