const coordinatorServices = require('../services/coordinator-services');

function getDataOrganizacion(req, res) {
  const { usuario } = req;

  delete usuario.dataValues.password;
  res.status(200).send(usuario);
}

async function getAllCoordinators(req, res) {
  const user = await coordinatorServices.getAll();
  res.status(200).send(user);
}

async function getCoordinatorById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await coordinatorServices.getById(id);
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

async function createCoordinator(req, res) {
  const {
    name, description, email, password, address, phone,
  } = req.body;

  // eslint-disable-next-line max-len
  const user = await coordinatorServices.createUser(name, description, email, password, address, phone);

  res.status(201).send(user);
}

async function editCoordinator(req, res) {
  const { id } = req.params;
  const {
    name, description, email, address, phone,
  } = req.body;

  // eslint-disable-next-line max-len
  const user = await coordinatorServices.editUser(id, name, description, email, address, phone);

  res.status(201).send(user);
}

async function deleteCoordinator(req, res) {
  const { id } = req.params;
  await coordinatorServices.deleteUser(id);

  res.status(200).send(`Usuario con el id ${id} ha sido eliminado exitosamente`);
}

async function loginCoordinator(req, res) {
  const { email, password } = req.body;

  try {
    const token = await coordinatorServices.login(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
}

async function modifyPasswordController(req, res) {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const user = await coordinatorServices.modifyPassword(id, currentPassword, newPassword);
    res.status(200).json({ user, message: 'contraseña actualizada correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar la contraseña' });
  }
}

module.exports = {
  // eslint-disable-next-line max-len
  getAllCoordinators, getCoordinatorById, createCoordinator, editCoordinator, deleteCoordinator, loginCoordinator, getDataOrganizacion, modifyPasswordController,
};
