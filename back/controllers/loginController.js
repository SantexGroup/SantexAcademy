const loginService = require('../services/loginService');
// const db = require('../models');

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

// Prueba tiempo
// async function pruebasTiempo(req, res) {
//   const limitTime = await db.password.findByPk(19);
//   console.log(limitTime.limit_time.toLocaleString());
//   res.status(200).send(limitTime);
// }

module.exports = {
  sendOtpLogin,
  verificarPassword,
// pruebasTiempo,
};
