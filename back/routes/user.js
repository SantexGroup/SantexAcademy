const express = require('express');

const router = express.Router();

const { userControllers } = require('../controllers');

router.get('/user', userControllers.createUser);

module.exports = router;
