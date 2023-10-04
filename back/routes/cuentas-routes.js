const Express = require('express');
const cuentasController = require('../controllers/cuentas-controller');

const router = Express.Router();

router.post('/login', cuentasController.login);

module.exports = router;
