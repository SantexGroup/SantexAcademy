const adminService = require('../services/administrator-service');

async function login(req, res) {
  const { email, password } = req.body;

  try {
    const token = await adminService.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
}

async function getData(req, res) {
  const { usuario } = req;

  delete usuario.dataValues.password;
  res.status(200).send(usuario);
}

async function createAdmin(req, res) {
  const { email, password } = req.body;

  const admin = await adminService.create(email, password);
  res.status(201).send(admin);
}
module.exports = { login, getData, createAdmin };
