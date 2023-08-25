const { userService } = require('../services');

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

const store = async (req, res) => {
  const { body } = req;
  const user = await userService.store(body);
  res.json(user);
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
  store,
  update,
  destroy,
};
