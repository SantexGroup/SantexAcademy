const Express = require('express');
const Passport = require('passport');
const dogControllers = require('../controllers/dog.controllers');
require('../middleware/passport.middleware')(Passport);
const DogValidation = require('../middleware/createDogsValidations/validations');
const Validator = require('../middleware/validationDogs.middleware ');

//const router = express.Router();

//router.post("/", canControllers.altaDog);
 
const app = Express();

app.post('/altaDog',
[
    DogValidation.validate('altaDog'),
    Validator.checkValidationResult
    //Passport.authenticate('jwt', { session: false }),
],
dogControllers.altaDog);



module.exports = app;
