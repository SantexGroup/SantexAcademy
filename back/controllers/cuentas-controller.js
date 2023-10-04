const cuentasService = require('../services/cuentas-service');

async function login(req, res, next) {
  const {
    email, password,
  } = req.body;

  try {
    const credenciales = await cuentasService.login(email, password);
    res.status(201).send(credenciales);
  } catch (error) {
    res.status(401).json({ message: 'Credenciales incorrectas' });
    // eslint-disable-next-line no-undef
    next(error);
  }
}

module.exports = { login };
