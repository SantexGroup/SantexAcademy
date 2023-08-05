const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');
//
//
//
router.post('/record', userController.recordUser);
router.post('/login', userController.login);
router.put('/update/:id', userController.updateUser);
router.delete('/remove/:id', userController.userDeleted);

//
//
//
module.exports = router;
