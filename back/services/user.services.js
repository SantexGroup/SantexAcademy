const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models').user;
const UserNotFoundException = require('../exceptions/userNotFound.exception');
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');
const GenericException = require('../exceptions/generic.exceptions');

function createToken(id) {
  const expirationTime = parseInt(process.env.JWT_EXPIRATION_TOKEN, 10);
  return jwt.sign(
    { userId: id },
    process.env.JWT_ENCRYPTION_TOKEN,
    { expiresIn: expirationTime },
  );
}
async function login(username, password) {
  const user = await userModel.findOne({ where: { username } });
  if (user) {
    const isCorrect = bcrypt.compareSync(password, user.password);
    if (isCorrect) {
      const token = createToken(user.id);
      delete user.dataValues.password;
      return { user, token };
    }
  }
  throw new InvalidPasswordException();
}

async function getOne(data) {
  const user = await userModel.findOne({ where: data, attributes: { exclude: ['password'] } });
  return user;
}

async function newUser(username, password) {
  const exists = await userModel.findOne({ where: { username } });
  if (exists) {
    throw new GenericException('Nombre de Usuario no disponible', 409);
  }
  const hash = bcrypt.hashSync(password, 10);
  const user = await userModel.create({ username, password: hash });
  delete user.dataValues.password;
  return user;
}

/**
 * 
 * @param {*} id
 * @param {*} userData
 */
async function edit(id, userData) {
  const user = await userModel.findByPk(id, {
    attributes: { exclude: ['password'] }
  });

  if (!!user) {
    if (!!userData.email) {
      user.email = userData.email;
    }

    if (userData.phonenumber) {
      user.phone_number = userData.phonenumber
    }

    if (userData.name) {
      user.name = userData.name;
    }

    if (userData.lastname) {
      user.lastname = userData.lastname;
    }

    user.save();

    return user;
  }
  throw new UserNotFoundException();
}

module.exports = {
  login,
  getOne,
  newUser,
  edit,

};
