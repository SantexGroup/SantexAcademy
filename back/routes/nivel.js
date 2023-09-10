const express = require('express');

const router = express.Router();
const nivelController = require('../controllers/nivel');

router.get('/', nivelController.allNivels);

module.exports = router;
