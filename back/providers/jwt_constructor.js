const { SignJWT } = require('jose');

const jwtConstructor = async (payload, key) => {
  const constructor = new SignJWT({ userId: payload });

  const jwt = await constructor
    .setProtectedHeader({
      alg: 'HS256',
      typ: 'JWT',
    })
    .setIssuedAt()
    .setExpirationTime('30d')
    .sign(key);

  return jwt;
};

module.exports = jwtConstructor;
