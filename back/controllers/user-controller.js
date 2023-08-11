const userService = require('../services/user-service');

async function login(req, res, next) {
  console.log('funcionLogin');
  const { name, password } = req.body;

  try {
    const result = await userService.login(name, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
