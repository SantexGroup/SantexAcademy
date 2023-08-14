const { userService } = require('../services');

const createUser = async (req, res) => {
  const userData = req.body;
  try {
    const createdUser = await userService.createUser(userData);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: 'Error when creating user' });
  }
};

module.exports = { createUser };
