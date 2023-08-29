const express = require('express');
const pollsterControllers = require('../controllers/pollsterControllers');

const router = express.Router();

router.get('obtener-pollsters', pollsterControllers.getAllPollster);
router.get('/obtener-por-id/:id', pollsterControllers.getPollsterById);
router.post('/crear', pollsterControllers.createPollster);
router.put('/editar/:id', pollsterControllers.editPollster);
router.delete('/eliminar/:id', pollsterControllers.deletePollster);
router.post('/login-encuestador', pollsterControllers.login);

module.exports = router;
