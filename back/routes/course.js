const express = require('express');
const router = express.Router();

router.get('/hola', (req, res) => res.json({ message: 'Hola' }));

module.exports = router;
a