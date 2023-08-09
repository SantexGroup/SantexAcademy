/* eslint-disable import/no-extraneous-dependencies */
const jwt = require('jsonwebtoken');

// genera el token y con los datos del usuario
const tokenSign = (user) => jwt.sign(
  {
    id: user.id,
    isAdmin: user.isAdmin,
    isTeacher: user.isTeacher,
  },
  process.env.JWT_SECRET,
  {
    expiresIn: '1h',
  },
);

module.exports = {
  tokenSign,
};
