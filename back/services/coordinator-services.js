const { DataTypes, Sequelize } = require('sequelize');
const coordinatorModel = require('../models/coordinator-model');
const { sequelize } = require('../models');

async function getAll() {
  const Coordinator = coordinatorModel(sequelize, DataTypes);
  const listCoord = await Coordinator.findAll();
  return listCoord;
}

async function getById(id) {
  const Coordinator = coordinatorModel(sequelize, DataTypes);
  const user = await Coordinator.findByPk(id);

  if (user == null) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}

async function createUser(name, description, email, password, address, phone) {
  const Coordinator = coordinatorModel(sequelize, DataTypes);
  const user = new Coordinator();

  user.name = name;
  user.description = description;
  user.email = email;
  user.password = password;
  user.address = address;
  user.phone = phone;

  const userCreated = await user.save();

  return userCreated;
}

async function editUser(id, name, description, email, password, address, phone) {
  const Coordinator = coordinatorModel(sequelize, DataTypes);
  const user = await getById(id);

  if (name) {
    user.name = name;
  }
  if (description) {
    user.description = description;
  }
  if (email) {
    user.email = email;
  }
  if (password) {
    user.password = password;
  }
  if (address) {
    user.address = address;
  }
  if (phone) {
    user.phone = phone;
  }

  const userEdited = user.save();
  return userEdited;
}

async function deleteUser(id) {
  const Coordinator = coordinatorModel(sequelize, DataTypes);
  const user = await getById(id);

  await user.destroy();
}

module.exports = {
  getAll, getById, createUser, editUser, deleteUser,
};
