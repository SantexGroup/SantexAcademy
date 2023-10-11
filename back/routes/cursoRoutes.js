const express = require('express');
const cursoController = require('../controllers/cursoController');

const router = express.Router();

//endpoints
router.get('/getAll', cursoController.getAllCursos);
router.get('/getById/:id', cursoController.getCursoById);
router.post('/createCurso', cursoController.createCurso);
router.put('/editCurso/:id', cursoController.editCurso);
router.delete('/deleteCurso/:id', cursoController.deleteCurso);
//
router.get('/busquedaCurso', cursoController.buscarCursos )
router.get('/novedadesCursos', cursoController.novedades)

module.exports = router;