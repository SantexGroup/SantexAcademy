const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const administratorModel = require('../models/administrator-model');
const { sequelize } = require('../models');
// eslint-disable-next-line import/order
const bcrypt = require('bcrypt');

const Administrator = administratorModel(sequelize, DataTypes);

async function login(email, password) {
  const user = await Administrator.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new Error('Email o contraseña incorrectos');
  }
  const token = jwt.sign({ id: user.id, tipoUsuario: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

async function create(email, password) {
  const admin = new Administrator();

  admin.email = email;
  admin.password = await bcrypt.hash(password, 10);

  const adminCreated = await admin.save();
  delete adminCreated.dataValues.password;

  return adminCreated;
}

module.exports = { login, create };
