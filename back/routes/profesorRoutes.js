const express = require('express');
const profesorController = require('../controllers/profesorController');
const router = express.Router();
const validateToken = require('../middleware/validateToken')


//endpoints 
router.post('/createProfesor', profesorController.createProfesor);
router.post('/login', profesorController.loginProfesor);
router.get('/getAllProfesors', profesorController.getAllProfesors);
router.get('/getProfesorById/:id', profesorController.getProfesorById);
router.put('/editProfesor/:id', validateToken ,profesorController.editProfesor);
router.delete('/deleteProfesor/:id', profesorController.deleteProfesor);

module.exports = router