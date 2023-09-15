const crypto = require('crypto');

function codeGenerator() {
  const randomBytes = crypto.randomBytes(8);
  const code = randomBytes.toString('hex');
  return code;
}

module.exports = { codeGenerator };