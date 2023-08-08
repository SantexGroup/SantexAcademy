const db = require('../models/index');

const userCreate = async (user) => {
  // falta verificar si el usuario ya existe (usuario ya registrado)
  try {
    const newUser = await db.User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    });
    return newUser;
  } catch (error) {
    console.error('Unable to create a user. Error: ', error);
    throw error;
  }
};

module.exports = { userCreate };
