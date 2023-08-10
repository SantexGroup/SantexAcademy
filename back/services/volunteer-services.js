const { DataTypes, Sequelize } = require('sequelize');
const volunteerModel = require('../models/volunteer-model');
const { sequelize } = require('../models');

async function getAll() {
  const Volunteer = volunteerModel(sequelize, DataTypes);
  const listVolunteer = await Volunteer.findAll();
  return listVolunteer;
}

async function getById(id) {
  const Volunteer = volunteerModel(sequelize, DataTypes);
  const user = await Volunteer.findByPk(id);

  if (user == null) {
    throw new Error('Usuario no encontrado');
  }

  return user;
}

async function createUser(name, lastname, dni, email, password, address, phone) {
  const Volunteer = volunteerModel(sequelize, DataTypes);
  const user = new Volunteer();

  user.name = name;
  user.lastname = lastname;
  user.dni = dni;
  user.email = email;
  user.password = password;
  user.address = address;
  user.phone = phone;

  const userCreated = await user.save();

  return userCreated;
}

async function editUser(id, name, lastname, dni, email, password, address, phone, points) {
  const Volunteer = volunteerModel(sequelize, DataTypes);
  const user = await getById(id);

  if (name) {
    user.name = name;
  }

  if (lastname) {
    user.lastname = lastname;
  }

  if (email) {
    user.email = email;
  }

  if (dni) {
    user.dni = dni;
  }

  if (password) {
    user.password = password;
  }

  if (address) {
    user.address = address;
  }

  if (points) {
    user.points = points;
  }

  if (phone) {
    user.phone = phone;
  }

  const userEdited = await user.save();

  return userEdited;
}

async function deleteUser(id) {
  const Volunteer = volunteerModel(sequelize, DataTypes);
  const user = await getById(id);

  await user.destroy();
}

module.exports = {
  getAll, getById, createUser, editUser, deleteUser,
};
