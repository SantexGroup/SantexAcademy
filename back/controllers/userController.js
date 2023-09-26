const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const { UserService } = require('../services');
const transporter = require('../helpers');

const saltRounds = 10;

const createCode = async (req, res) => {
  const { email } = req.body;
  try {
    const code = await UserService.createCode(email);

    res.status(200).json(code);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserService.getUserById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const user = await UserService.getUserByEmail(email);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req, res) => {
  try {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const {
    firstName, lastName, email, phone, password,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  let codeselect = '';
  /* eslint-disable */
  for (let index = 0; index <= 5; index++) {
    const character = Math.ceil(Math.random() * 9);
    codeselect += character;
  }
  /* eslint-enable */

  try {
    const user = await UserService.createUser({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      code: codeselect,
    });
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
      <h3>Si es usted por favor vaya al siguiente link</h3>
      
    </div>
  </div>
        <a target="_blank" href="http://localhost:4200/verificar-email/${user.email}/${user.code}">Verificar<a>
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
    return res.status(201).json(transporterSe);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const validateCode = async (req, res) => {
  const { code, email } = req.params;
  try {
    const codeVerificado = await UserService.validateCode(code, email);
    return res.status(200).json(codeVerificado);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updateUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const { userId } = req.params;
  const {
    firstName, lastName, phone, password,
  } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  try {
    // le agrego el dates porque me da error el eslint por la liña 57
    const updateUserDates = await UserService.updateUser(userId, {
      firstName,
      lastName,
      phone,
      password: hashedPassword,
    });
    return res.status(200).json(updateUserDates);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const updatePassword = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).send({
      errors: result.array(),
    });
  }
  const { userId } = req.params;
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  try {
    // le agrego el dates porque me da error el eslint por la liña 82
    const updatePasswordDate = await UserService.patchUser(userId, {
      password: hashedPassword,
    });
    return res.status(200).json(updatePasswordDate);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await UserService.deleteUser(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// exports
module.exports = {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
  updatePassword,
  getUserByEmail,
  validateCode,
  createCode,
};
