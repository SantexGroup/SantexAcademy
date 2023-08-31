const { User } = require('../models');

const allCurso = async () => {
  const users = await User.findAll({
    where: {
      estado: true,
    },
  });
  return users;
};

const getUser = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

const createUser = async (body) => {
  const user = await User.create(body);
  return user;
};

const updateUser = async (id, body) => {
  const user = await User.findByPk(id);
  await user.update(body);
  return user;
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  await user.update({ estado: false });
  return user;
};

module.exports = {
  allCurso,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
