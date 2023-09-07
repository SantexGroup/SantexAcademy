const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.get('/obtener-admin', adminController.getAllAdmin);
router.get('/obtener/:id', adminController.getAdminById);
router.post('/crear', adminController.createAdmin);
router.put('/actualizar/:id', adminController.editAdmin);
router.delete('/eliminar/:id', adminController.deleteAdmin);

module.exports = router;
