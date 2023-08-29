const { userService, emailService } = require('../services');

const index = async (req, res) => {
  const users = await userService.index();
  res.json(users);
};

const show = async (req, res) => {
  const { id } = req.params;
  const user = await userService.show(id);
  res.json(user);
};

const createUser = async (req, res) => {
  const { body } = req;
  try {
  const user = await userService.createUser(body);
  console.log('Email del usuario:', user.email);// BORRAR es para ver captura de mail
  await emailService.sendConfirmationEmail(user.email, user.username);// Envia email a emailService

  res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el registro en controllers' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const user = await userService.update(id, body);
  res.json(user);
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const user = await userService.destroy(id);
  res.json(user);
};

module.exports = {
  index,
  show,
  createUser,
  update,
  destroy,
};
