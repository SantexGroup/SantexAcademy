const bcript = require('bcrypt');
const { generarJWT } = require('../helpers/jwt');
const { userService, emailService } = require('../services');
const { User } = require('../models');

const allUser = async (req, res, next) => {
  try {
    const users = await userService.allUser();
    res.status(201).json(users);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next();
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.getUser(id);
    res.status(200).json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const verifyLinkEmail = async (req, res, next) => {
  const email = req.query.email; // Consulta mail que se recibe en URL del mail
  //console.log(email);
  try {
    const user = await userService.getUserByEmail(email);// Verificacion con DB
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });// El usuario no existe en DB
    }
    user.verificationCode = true;// Actualiza el campo si es correcto
    await user.save();
    return res.status(200).json({ success: 'Correo electrónico verificado con éxito.' });//Se maneja desde front
  } catch (error) {
    console.error(error);
    next(error);
    return;
  }
};

const createUser = async (req, res) => {
<<<<<<< HEAD
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }
  const { body } = req;
  body.verificationCode = false;// Establece false en la verificacion de email hasta que se realice
  const userEmail = req.body.email;
  const verificationLink = `http://localhost:4001/user/verifyEmail?email=${userEmail}`;
  try {
    const user = await userService.createUser(body);
    // eslint-disable-next-line no-console
    // eslint-disable-next-line max-len
    await emailService.sendMail(user, userEmail, verificationLink);// Envia email y url a emailService
    return res.json(user);
=======
  const { body } = req;
  const { email, username, password } = body;

  // console.log(body);
  try {
    // Verificar email
    let user = await User.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe con ese email',
      });
    }

    // Verificar username
    user = await User.findOne({
      where: {
        username,
      },
    });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'El usuario ya existe con ese username',
      });
    }

    // Hashear contraseña
    const salt = bcript.genSaltSync();
    body.password = bcript.hashSync(password, salt);

    // crear usuario en db
    user = await userService.createUser(body);
    // eslint-disable-next-line max-len
    await emailService.sendConfirmationEmail(user.email, user.username);// Envia email a emailService

    const token = await generarJWT(user.id, user.username);

    return res.json({
      ok: true,
      user,
      token,
    });
>>>>>>> juanjoDiaz
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'El email no existe',
      });
    }

    const validPassword = bcript.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'La contraseña no coincide',
      });
    }

    const token = await generarJWT(user.id, user.username);

    return res.json({
      ok: true,
      id: user.id,
      username: user.username,
      token,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);

    return res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

const revalidarToken = async (req, res) => {
  const { id, username } = req;

  const token = await generarJWT(id, username);
  return res.json({
    ok: true,
    id,
    username,
    token,
  });
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await userService.updateUser(id, body);
    res.status(200).json(user);
    return;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await userService.deleteUser(id);
    res.json(user);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    next(error);
  }
};

module.exports = {
  allUser,
  getUser,
  verifyLinkEmail,
  createUser,
  login,
  revalidarToken,
  updateUser,
  deleteUser,
};
