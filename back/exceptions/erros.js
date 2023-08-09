const userNotFound = new Error('User Not Found');
const wrongEmailOrPassw = new Error('Wrong Email and/or Password');

module.exports = {
  userNotFound,
  wrongEmailOrPassw,
};
