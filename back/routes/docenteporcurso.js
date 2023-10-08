const express = require('express');

const router = express.Router();
const docentePorCursoController = require('../controllers/docenteporcurso');


router.get('/:id/cursos', docentePorCursoController.cursoPorDocentePorIDController);
router.get('/', docentePorCursoController.allDocentesPorCurso);
router.get('/:id', docentePorCursoController.getDocentePorCurso);
router.post('/', docentePorCursoController.createDocentePorCurso);
router.put('/:id', docentePorCursoController.updateDocentePorCurso);
router.get('/iddocente/:iddocente', docentePorCursoController.getCursosPorDocente);

module.exports = router;

