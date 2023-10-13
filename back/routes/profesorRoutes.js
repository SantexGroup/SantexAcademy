const express = require('express');
const profesorController = require('../controllers/profesorController');
const router = express.Router();
const authenticateToken = require('../middleware/authentication');

//endpoints 
router.post('/createProfesor', profesorController.createProfesor);
router.post('/login', profesorController.loginProfesor);
router.get('/getAllProfesors', profesorController.getAllProfesors);
router.get('/getProfesorById/:id', profesorController.getProfesorById);
router.put('/editProfesor/:id', profesorController.editProfesor);
router.delete('/deleteProfesor/:id', authenticateToken, profesorController.deleteProfesor);

module.exports = router