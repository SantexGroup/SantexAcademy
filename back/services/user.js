const { UserProvider } = require('../providers');

const createUserServ = async (user) => {
  const newUser = await UserProvider.newUserProv(
    user,
  );

  return newUser;
};

const loginServ = async (user) => {
  const foundUser = await UserProvider.loginProv(
    user,
  );
  return foundUser;
};

module.exports = {
  createUserServ,
  loginServ,
};
