const passport = require('passport');
const PassportStrategy = require('./passport-config');

function initializeAuthentication() {
  passport.use(PassportStrategy);
}
module.exports = { initializeAuthentication };
