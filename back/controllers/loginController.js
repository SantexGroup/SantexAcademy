const loginService = require('../services/loginService');

// Login
async function sendOtpLogin(req, res, next) {
  const { email } = req.body;

  try {
    const result = await loginService.emailLogin(email);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

// Verificar password
async function verificarPassword(req, res, next) {
  const { password } = req.body;
  try {
    const result = await loginService.verificarPassword(password);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  sendOtpLogin,
  verificarPassword,
};
