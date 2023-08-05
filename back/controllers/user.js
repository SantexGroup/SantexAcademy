// eslint-disable-next-line import/no-unresolved
const services = require('../services/user');

const { userService } = services;

const getUser = async (req, res) => {
  // eslint-disable-next-line prefer-destructuring
  const idUser = req.params.idUser;
  try {
    const user = await userService.getUser(idUser);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getUser };
