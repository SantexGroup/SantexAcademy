const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models').user;
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');

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

module.exports = {
  login,
  getOne,
};
