const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router();

router.post('/send-otp', loginController.sendOtpLogin);
// router.get('/time', loginController.pruebasTiempo);
router.post('/confirm-password', loginController.verificarPassword);

module.exports = router;
