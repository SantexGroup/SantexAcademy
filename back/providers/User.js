const { User } = require('../models');
const hashPassword = require('../utils/hash_password.util');

const postUser = async (req, res) => {
  try {
    const {
      lastName, firstName, email, password,
    } = req.body;

    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    if (!lastName || !firstName || !email || !password) {
      return res.json({ error: 'Informacion Incompleta' });
    }
    const existUser = await User.findOne({ where: { email } });
    if (existUser) return res.status(401).send('Email ya registrado');

    newUser.password = await hashPassword(password);

    await User.create(newUser);
    return res.status(200).json({ message: 'Usuario creado exitosamente' });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

module.exports = { postUser };
