const userService = require('../services/user.services');

async function login(req, res, next) {
  try {
    const { username, password } = req.body;
    const user = await userService.login(username, password);

    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function userInfo(req, res, next) {
  try {
    res.json(req.user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  login,
  userInfo,
};
