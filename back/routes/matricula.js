const express = require('express');

const router = express.Router();
const matriculaController = require('../controllers/matricula');

router.post('/', matriculaController.createMatricula);
router.put('/:id', matriculaController.updateMatricula);

module.exports = router;
