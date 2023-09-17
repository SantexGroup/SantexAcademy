const express = require('express');
const jwt = require('jsonwebtoken');
const userProvider = require('../providers/userProvider');
// const adminCheck = require('../middleware/authentication.middleware');
// const { SECRET } = require('../middleware/authentication.middleware');
const authenticationMiddleware = require('../middleware/authentication.middleware');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const userlogin = await userProvider.validateUser(email, password);
  if (userlogin) {
    if (authenticationMiddleware.adminCheck(userlogin)) {
      const token = jwt.sign({ email, role: 'IsAdmin' }, authenticationMiddleware.SECRET);
      res.json({ token });
    } else {
      const token = jwt.sign({ email, role: 'NotAdmin' }, authenticationMiddleware.SECRET);
      res.json({ token });
    }
  }
  if (!userlogin) {
    res.status(401).json({ message: 'Autentication failed' });
  }

  /*
  if (authenticationMiddleware.adminCheck(req, res)) {
    const token = jwt.sign({ email, role: 'IsAdmin' }, authenticationMiddleware.SECRET);
    res.json({ token });
  } else {

    if (userlogin) {
      const token = jwt.sign({ email, role: 'NotAdmin' }, authenticationMiddleware.SECRET);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Autentication failed' });
    }
  } */
});

module.exports = router;
