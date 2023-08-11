const { User } = require('../models');

async function login(alias, password) {
  const users = await User.findOne({ 
    where: { 
        alias: alias,
        password: password
    } 
});

if (!users) {
    throw new Error("Alias o Contraseña incorrectos");
}

  return users;
}

module.exports = { login };
