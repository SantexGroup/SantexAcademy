/* eslint-disable import/order */
/* eslint-disable object-shorthand */
// eslint-disable-next-line no-unused-vars
const { DataTypes, Sequelize } = require('sequelize');
const coordinatorModel = require('../models/coordinator-model');
const { sequelize } = require('../models');
const jwt = require('jsonwebtoken');

const Coordinator = coordinatorModel(sequelize, DataTypes);

async function getAll() {
  const listCoord = await Coordinator.findAll();
  return listCoord;
}

async function getById(id) {
  const user = await Coordinator.findByPk(id);

  if (user == null) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}

async function createUser(name, description, email, password, address, phone) {
  const user = new Coordinator();

  user.name = name;
  user.description = description;
  user.email = email;
  user.password = password;
  user.address = address;
  user.phone = phone;

  const userCreated = await user.save();
  delete userCreated.dataValues.password;
  return userCreated;
}

async function editUser(id, name, description, email, password, address, phone) {
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
  const user = await getById(id);

  await user.destroy();
}

async function login(email, password) {
  const user = await Coordinator.findOne({
    where: {
      email: email,
      password: password,
    },
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  const token = jwt.sign({ id: user.id, tipoUsuario: 'organizacion' }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

module.exports = {
  getAll, getById, createUser, editUser, deleteUser, login,
};
