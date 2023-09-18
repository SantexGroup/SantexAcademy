const express = require('express');
const jwt = require('jsonwebtoken');
const authmw = require('../middleware/authentication.middleware');
const userProvider = require('../providers/userProvider');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const userloged = await userProvider.validateUser(email, password);

  if (userloged) {
    const token = jwt.sign({ id: userloged.id, email, isAdmin: userloged.admin },
      authmw.SECRET,
      { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Autentication failed' });
  }
});

module.exports = router;
