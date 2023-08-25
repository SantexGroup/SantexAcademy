const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

router.post('/', async (req, res) => {
  const {
    firstName, lastName, email, phone, password,
  } = req.body;
  try {
    const user = await userService.createUser({
      firstName, lastName, email, phone, password,
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
