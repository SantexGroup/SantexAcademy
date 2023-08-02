const { userService } = require('../services');

const createUser = async (req, res) => {
  const newDataUser = {
    username: 'juan',
    password: 123,
    email: 'juan@juan',

  };

  try {
    const newUser = await userService.createUser(newDataUser);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error, action: 'Creating user' });
  }
};

module.exports = {
  createUser,
};
