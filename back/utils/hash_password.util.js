const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const { SALT } = process.env;

  const salt = await bcrypt.genSalt(Number(SALT));
  const hash = await bcrypt.hash(password, salt);

  return hash;
};

module.exports = hashPassword;
