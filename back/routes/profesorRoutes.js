const express = require('express');
const userController = require('../controllers/profesorController')
const router = express.Router();

//endpoints 
router.post('/createProfesor', userController.createProfesor);

module.exports = router