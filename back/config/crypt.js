const bcrypt = require("bcrypt");

//? esta funcion recibe la password en texto plano y la encripta.
const hashPassword = (plainTextPwd) => {
  return bcrypt.hashSync(plainTextPwd, 10);
};

//? esta funcion compara la password en texto plano con la encriptada.
const comparePassword = (plainTextPwd, hashPassword) => {
  return bcrypt.compareSync(plainTextPwd, hashPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
