const userService = require('../services/user-service');

async function login(req, res, next) {

  const { alias, password } = req.body;

  try {
    const result = await userService.login(alias, password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { login };
