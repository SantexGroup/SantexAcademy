const express = require('express');

const router = express.Router();
// const { userController } = require('../controllers');
// crear un usuario
router.post('/', (req, res) => {
  res.json({
    response: 'hola soy un loggin',
  });
});

module.exports = router;
