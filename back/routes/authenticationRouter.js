const express = require('express');
const jwt = require('jsonwebtoken');
const authmw = require('../middleware/authentication.middleware');
const userProvider = require('../providers/userProvider');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const user = await userProvider.validateUser(email, password);

  if (user) {
    const token = jwt.sign({ id: user.id, email, isAdmin: user.admin },
      authmw.SECRET);
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Autentication failed' });
  }
});

module.exports = router;
