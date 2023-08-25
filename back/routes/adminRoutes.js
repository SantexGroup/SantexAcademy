const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/obtener-todos', adminController.getAllAdmin);
router.get('/obtener-por.id', adminController.getAdminById);
router.post('/crear', adminController.createAdmin);
router.put('/actualizar/:id', adminController.editAdmin);
router.delete('/eliminar', adminController.deleteAdmin);
router.post('/login', adminController.login);

module.exports = router;
