const express = require('express');
const profesorController = require('../controllers/profesorController')
const router = express.Router();

//endpoints 
router.post('/createProfesor', profesorController.createProfesor);
router.get('/getAllProfesors', profesorController.getAllProfesors);
router.get('/getProfesorById/:id', profesorController.getProfesorById);


module.exports = router