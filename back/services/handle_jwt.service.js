const jwtConstructor = require('../providers/jwt_constructor');

const handleJWT = (payload) => {
  const encoder = new TextEncoder();

  const key = encoder.encode(process.env.JWT_PRIVATE_KEY);

  return jwtConstructor(payload, key);
};

module.exports = handleJWT;
