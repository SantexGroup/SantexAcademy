const express = require('express');

const router = express.Router();
const docenteController = require('../controllers/docente');

router.get('/', docenteController.allDocentes);
router.get('/:id', docenteController.getDocente);
router.post('/', docenteController.createDocente);
router.put('/:id', docenteController.updateDocente);
router.get('/userdocente/:userId', docenteController.obtenerDocenteIdPorUserId);
router.delete('/:id', docenteController.deleteDocente);

module.exports = router;
