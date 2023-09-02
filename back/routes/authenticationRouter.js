const express = require('express');
const jwt = require('jsonwebtoken');
const userProvider = require('../providers/userProvider');
const adminCheck = require('../middleware/authentication.middleware');
const { SECRET } = require('../middleware/authentication.middleware');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (adminCheck) {
    const token = jwt.sign({ email, role: 'IsAdmin' }, SECRET);
    res.json({ token });
  } else {
    const userlogin = await userProvider.validateUser(email, password);
    if (userlogin) {
      const token = jwt.sign({ email, role: 'NotAdmin' }, SECRET);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Autentication failed' });
    }
  }
});

module.exports = router;
