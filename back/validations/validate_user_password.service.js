const { compare } = require('bcrypt');

const validateUserPassword = async (password, hashedPassword) => {
  const result = await compare(password, hashedPassword);

  return result;
};

module.exports = validateUserPassword;
