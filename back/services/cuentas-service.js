const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../models/index');

async function login(email, password) {
  const user = await models.usuario.findOne({
    where: {
      email,
    },
    include: [
      {
        model: models.rol,
      },
    ],
  });

  if (!user) {
    throw new Error('Email o contraseña incorrectos');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Email o contraseña incorrectos');
  }
  const token = jwt.sign({ email: user.email, tipo: user.rols[0].name }, process.env.JWT_SECRET, { expiresIn: '1h' });

  const credenciales = {
    token,
    tipo: user.rols[0].name,
  };

  return credenciales;
}

module.exports = { login };
