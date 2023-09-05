const express = require('express');
const pollsterControllers = require('../controllers/pollsterControllers');

const router = express.Router();

router.get('/obtener-pollsters', pollsterControllers.getAllPollster);
router.get('/obtener/:id', pollsterControllers.getPollsterById);
router.post('/crear', pollsterControllers.createPollster);
router.put('/actualizar/:id', pollsterControllers.editPollster);
router.delete('/eliminar/:id', pollsterControllers.deletePollster);

module.exports = router;
