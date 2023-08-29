const Express = require('express');
const adminController = require('../controllers/administrator-controller');
const { isAuthenticatedAdmin } = require('../middleware/authentication');

const router = Express.Router();
router.post('/login', adminController.login);
router.get('/datos', isAuthenticatedAdmin, adminController.getData);

module.exports = router;
