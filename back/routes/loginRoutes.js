const express = require('express');
const loginController = require('../controllers/loginController');

const router = express.Router;

router.post('/send-otp', loginController.sendOtpLogin);
router.post('/confirm-password');
