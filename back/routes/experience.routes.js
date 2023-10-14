const express = require('express');

const router = express.Router();
const ExperinceController = require('../controllers/experience.controller');

router.get('/types', ExperinceController.experienceTypesGet);

router.get('/status', ExperinceController.experienceStatusGet);
// Ruta para obetener 1 Experiences
router.get('/:id', ExperinceController.experienceGet);
// Ruta para obetener todas las Experiences de un usuario
router.get('/all/:id', ExperinceController.experienceGetAll);
// Ruta para agregar 1 Experiences y su relacionen Profile_Experiences
router.post('/add', ExperinceController.experienceAdd);
// Ruta para eliminar 1 Experiences
router.delete('/delete/:id', ExperinceController.experienceDelete);
// Ruta para actualizar 1 Experiences
router.put('/update/:id', ExperinceController.experienceUpdate);

module.exports = router;
