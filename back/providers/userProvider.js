const bcrypt = require('bcrypt');
const { User } = require('../models');
const transporter = require('../helpers');

const createUser = async (userData) => {
  try {
    const newUser = await User.create(userData);
    return newUser;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUserByEmail = async (option) => {
  try {
    const user = await User.findOne({
      where: { email: option },
    });
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const createCode = async (email) => {
  try {
    const user = await getUserByEmail(email);
    let code = '';
    // me toma el ++ como error
    /* eslint-disable */
    for (let index = 0; index <= 5; index++) {
      const character = Math.ceil(Math.random() * 9);
      code += character;
    }
    /* eslint-enable */
    user.code = code;
    user.save();
    const htmlBody = `
  <html>
    <head>
      <style>
        
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f0f0;
          text-align: center;
        }
        .container {
          padding: 20px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
      </style>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
    </head>
    <body>
      <div class="container">
        <div class="row">
          <h1>Necesitamos validar que usted esta registrandose</h1>
        </div>
        <div class="row">
          <h4 style="color: red;">Si no es usted verifique hacer un cambio de contraseña o extremar sus medidas de seguridad</h4>
          <h3>Si es usted por favor vaya al siguiente link  <a class="boton" href="http://localhost:4200/verificar-email/${user.email}/${user.code}"> verificar</a></h3>
        </div>
      </div>
    </body>
  </html>`;

    const transporterSe = await transporter.sendMail({
      from: process.env.EMAIL,
      /* to:user.email, */
      to: user.email,
      subject: 'Código de valdiacion de email: ',
      html: htmlBody,
    });

    return transporterSe;
  } catch (error) {
    throw ('Error:', error);
  }
};

const validateCode = async (code, email) => {
  try {
    const user = await getUserByEmail(email);
    if (user.code !== code) {
      throw new Error('Error: incorrect code');
    }
    user.active = true;
    user.save();
    return user;
  } catch (error) {
    throw ('Error:', error);
  }
};
const getUsers = async () => {
  try {
    const options = {
      include: [{ all: true }],
      attributes: { exclude: ['password'] },
    };
    const users = await User.findAll(options);
    return users;
  } catch (error) {
    throw ('Error:', error);
  }
};

const updateUser = async (userId, userOptions) => {
  try {
    await getUserById(userId);
    await User.update(userOptions, { where: { id: userId } });
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const patchUser = async (userId, newPassword) => {
  try {
    const user = await User.findByPk(userId);
    user.password = newPassword.password;
    await user.save();
    return getUserById(userId);
  } catch (error) {
    throw ('Error:', error);
  }
};
const deleteUser = async (userId) => {
  try {
    return await User.update(
      { active: false },
      { where: { id: userId, active: true } },
    );
  } catch (error) {
    throw ('Error:', error);
  }
};
const validateUser = async (email, password) => {
  const userData = await getUserByEmail(email);
  const hashedPassword = userData.password;
  const match = await bcrypt.compare(password, hashedPassword);
  if (match) {
    try {
      const user = await User.findOne({
        where: { email, active: true },
      });
      if (user) {
        return user;
      }
      return false;
    } catch (error) {
      throw ('Error:', error);
    }
  } else {
    return false;
  }
};

module.exports = {
  createUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  getUsers,
  updateUser,
  patchUser,
  validateUser,
  validateCode,
  createCode,
};
