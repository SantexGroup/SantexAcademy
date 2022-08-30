const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userService = require('../services/user.services');
const InvalidPasswordException = require('../exceptions/invalidPassword.exceptions');

function createToken(id) {
  const expirationTime = Number(process.env.JWT_EXPIRATION_TOKEN);
  return jwt.sign(
    { userId: id },
    process.env.JWT_ENCRYPTION_TOKEN,
    { expiresIn: expirationTime },
  );
}
async function login(username, password) {
  const user = await userService.findOne({ username });
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
  return userService.findOne(data, { exclude: ['password'] });
}

module.exports = {
  login,
  getOne,
};
