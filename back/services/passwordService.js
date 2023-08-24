// const { Password } = require('../models/Password');

const Password = require('../models/Password');

// Crear una password
// eslint-disable-next-line camelcase
async function createPassword(password, limit_time) {
  const pass = new Password();
  pass.password = password;
  // eslint-disable-next-line camelcase
  pass.limit_time = limit_time;
  const passwordCreate = await pass.save();
  return passwordCreate;
}

// Obtener password
async function getAll() {
  const userList = await Password.findAll();

  return userList;
}

module.exports = { createPassword, getAll };
