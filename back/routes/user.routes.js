const express = require('express');
const { userValidations } = require('../validations');
const { checkValidationResult } = require('../middleware');
/* const { subir } = require('../services/toolServices/multer.services');
const { subirAdrive } = require('../services/toolServices/drive.services'); */

const router = express.Router();
const userController = require('../controllers/user.controller');

const createValidation = [userValidations.create, checkValidationResult];
const updateValidation = [userValidations.update, checkValidationResult];
const loginValidation = [userValidations.login, checkValidationResult];

router.post('/record', createValidation, userController.recordUser);
router.post('/login', loginValidation, userController.login);
router.get('/getUser/:id', userController.getUser); //* agregado
router.put('/update/:id', updateValidation, userController.updateUser);
router.delete('/remove/:id', userController.userDeleted);
//* router.post('/upload', subir, subirAdrive); //* ruta para subir la imagen

module.exports = router;
