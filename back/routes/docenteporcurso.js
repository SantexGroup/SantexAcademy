const express = require('express');

const router = express.Router();
const docentePorCursoController = require('../controllers/docenteporcurso');

router.get('/', docentePorCursoController.allDocentesPorCurso);
router.get('/:id', docentePorCursoController.getDocentePorCurso);
router.post('/', docentePorCursoController.createDocentePorCurso);
router.put('/:id', docentePorCursoController.updateDocentePorCurso);

module.exports = router;
