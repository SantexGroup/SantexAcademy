const express = require('express');
const cursoController = require('../controllers/cursoController');
const router = express.Router();

//endpoints
router.get('/getAll', cursoController.getAllCursos);
router.post('/createCurso', cursoController.createCurso);

module.exports = router;