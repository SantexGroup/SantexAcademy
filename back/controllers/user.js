const { userService, emailService } = require('../services');

const index = async (req, res, next) => {
  try {
    const users = await userService.index();
    res.status(201).json(users);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
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
    // eslint-disable-next-line no-console
    if (user.username === 'admin' && user.password === 'admin') {
      return res.json({ redirectTo: '/users' });
    }
    console.log('Email del usuario:', user.email);// BORRAR es para ver captura de mail
    // eslint-disable-next-line max-len
    await emailService.sendConfirmationEmail(user.email, user.username);// Envia email a emailService

    return res.json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: 'Error en el registro en controllers' });
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
