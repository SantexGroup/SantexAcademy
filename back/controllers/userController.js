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
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: blue ;
                background-size: cover;
                background-repeat: no-repeat;
                background-attachment: fixed;
                text-align: center;
            }
    
            .container {
                padding: 20px;
                background-color: rgba(255, 255, 255, 0.8);
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                margin: 50px auto;
                max-width: 600px;
            }
    
            h1 {
                color: #333;
            }
    
            h4 {
                color: red;
            }
    
            .boton {
                background-color: #007BFF;
                color: #fff;
                padding: 10px 20px;
                text-decoration: none;
                border-radius: 5px;
            }
    
            .boton:hover {
                background-color: #0056b3;
            }
            b {
              color: white;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Necesitamos validar que usted está registrándose</h1>
            <h4>Si no es usted, verifique hacer un cambio de contraseña o extremar sus medidas de seguridad.</h4>
            <h3>Si es usted, por favor, vaya al siguiente link <a class="boton" href="http://localhost:4200/verificar-email/${user.email}/${user.code}"><b>verificar</b></a></h3>
        </div>
    </body>
    </html>
    `;

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
const inscription = async (req, res) => {
  const { idCourse, idUser } = req.body;
  try {
    const inscriptionSelect = await UserService.inscription(idCourse, idUser);
    return res.status(200).json(inscriptionSelect);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const removeCourseRegistration = async (req, res) => {
  const { idCourse, idUser } = req.params;
  try {
    const remove = await UserService.removeCourseRegistration(idCourse, idUser);
    return res.status(200).json(remove);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const patchAdmins = async (req, res) => {
  const userId = req.body;
  try {
    const admins = await UserService.patchAdmins(userId);
    return res.status(200).json(admins);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
const deleteAdmins = async (req, res) => {
  const userId = req.params;
  try {
    const admins = await UserService.deleteAdmins(userId);
    return res.status(200).json(admins);
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
  inscription,
  removeCourseRegistration,
  validateCode,
  createCode,
  patchAdmins,
  deleteAdmins,
};
