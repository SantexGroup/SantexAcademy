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
async function getAllAdministrator(req, res) {
  const user = await adminService.getAll();
  res.status(200).send(user);
}
async function getAdministratorById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await adminService.getById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}
async function createAdministrator(req, res) {
  const { email, password } = req.body;
  const user = await adminService.createUser(email, password);

  res.status(201).send(user);
}
async function editAdministrator(req, res) {
  const { id } = req.params;
  const { email, password } = req.body;
  const user = await adminService.editUser(id, email, password);

  res.status(201).send(user);
}
async function deleteAdministrator(req, res) {
  const { id } = req.params;
  await adminService.deleteUser(id);

  res.status(200).send(`Administrador con el id ${id} ha sido eliminado exitosamente`);
}
async function modifyPasswordController(req, res) {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await adminService.modifyPassword(id, currentPassword, newPassword);
    res.status(200).json({ user, message: 'contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la contraseña' });
  }
}

module.exports = {
  login,
  getData,
  getAllAdministrator,
  getAdministratorById,
  createAdministrator,
  editAdministrator,
  deleteAdministrator,
  modifyPasswordController,
  
};
