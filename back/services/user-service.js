const { User } = require('../models');

async function login() {
  const usuarios = await User.findAll();
  //console.log('USERS', usuarios);

  return usuarios;
}

module.exports = { login };
