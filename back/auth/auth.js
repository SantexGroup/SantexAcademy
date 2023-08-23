// eslint-disable-next-line import/no-extraneous-dependencies
const passport = require('passport');
const PassportStrategy = require('./passportConfig');

function initializeAuthentication() {
  passport.use(PassportStrategy);
}

module.exports = { initializeAuthentication };
