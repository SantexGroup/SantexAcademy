const { User } = require('../models');

const allUser = async () => {
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

const getUserByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email: email,
    },
  });
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
  allUser,
  getUser,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
