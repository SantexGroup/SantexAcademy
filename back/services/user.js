const { User } = require('../models');

const index = async () => {
  const users = await User.findAll();
  return users;
};

const show = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const store = async (body) => {
  const user = await User.create(body);
  return user;
};

const update = async (id, body) => {
  const user = await User.findByPk(id);
  await user.update(body);
  return user;
};

const destroy = async (id) => {
  const user = await User.findByPk(id);
  await user.destroy();
  return user;
};

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
