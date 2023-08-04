const { userService } = require('../services');

const createUser = async (req, res) => {
  const newDataUser = {
    firstName: 'juan',
    lastName: 'perez',
    password: '123345678',
    email: req.query.email,

  };
  console.log(req.query.email);
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
