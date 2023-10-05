const express = require('express');
const cursoController = require('../controllers/cursoController');
const curso = require('../models/curso');
const router = express.Router();

//endpoints
router.get('/getAll', cursoController.getAllCursos);
router.get('/getById/:id', cursoController.getCursoById);
router.post('/createCurso', cursoController.createCurso);
router.put('/editCurso/:id', cursoController.editCurso);
router.delete('/deleteCurso/:id', cursoController.deleteCurso);
//
router.get('/busquedaCurso/:filtro', )


module.exports = router;