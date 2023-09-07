const jwt = require('jsonwebtoken');

const generarJWT = (id, username) => {
  const payload = { id, username };

  return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.SESSION_SECRET, {
      expiresIn: '24h',
    }, (err, token) => {
      if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
        reject(err);
      } else {
        resolve(token);
      }
    });
  });
};

module.exports = {
  generarJWT,
};
