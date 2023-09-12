const { DataTypes } = require('sequelize');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const administratorModel = require('../models/administrator-model');
const { sequelize } = require('../models');
const models = require('../models/index');


const Administrator = administratorModel(sequelize, DataTypes);

async function getAll() {
  const listAdmin = await Administrator.findAll();
  return listAdmin;
}
async function getById(id) {
  const user = await Administrator.findByPk(id);

  if (user == null) {
    throw new Error('Administrador no encontrado');
  }

  return user;
}
async function createUser(email, password) {
  const user = new Administrator();

  user.email = email;
  user.password = await bcrypt.hash(password, 10);

  const userCreated = await user.save();
  delete userCreated.dataValues.password;
  return userCreated;
}
async function editUser(id, email) {
  const user = await getById(id);

  if (email) {
    user.email = email;
  }

  const userEdited = await user.save();

  delete userEdited.dataValues.password;

  return userEdited;
}

async function modifyPassword(id, currentPassword, newPassword) {
  try {
    const user = await getById(id);

    const passwordMatch = await bcrypt.compare(currentPassword, user.password);

    if (!passwordMatch) {
      throw new Error('La contraseña actual es incorrecta');
    } else {
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      user.password = hashedPassword;

      const userEdited = await user.save();
      delete userEdited.dataValues.password;
      return userEdited;
    }
  } catch (error) {
    throw new Error('Error al modificar la contraseña');
  }
}

async function deleteUser(id) {
  const user = await getById(id);

  await user.destroy();
}

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

async function createAdminDefault(email = 'admin@gmail.com', password = 'Admin123!') {
  const admin = await models.admin.findOne({
    where: {
      email,
    },
  });
  // eslint-disable-next-line no-useless-return
  if (admin !== null) return;

  await create(email, password);
}

module.exports = {
  getAll, getById, createUser, editUser, deleteUser, login, modifyPassword, createAdminDefault
};




