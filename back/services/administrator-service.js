const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const administratorModel = require('../models/administrator-model');
const { sequelize } = require('../models');
// const bcrypt = require('bcrypt');

const Administrator = administratorModel(sequelize, DataTypes);

async function login(email, password) {
  const user = await Administrator.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  // const passwordMatch = await bcrypt.compare(password, user.password);
  // if (!passwordMatch) {
  //   throw new Error('Email o contraseña incorrectos');
  // }
  const token = jwt.sign({ id: user.id, tipoUsuario: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
}

module.exports = { login };
