const jwt = require('jsonwebtoken');
// const admin = require('../models');
// eslint-disable-next-line import/no-extraneous-dependencies
const sgMail = require('@sendgrid/mail');
const passwordService = require('./passwordService');
// const adminService = require('./adminSerivice');
const db = require('../models');

// Función para enviar mail
function enviarEmail(pass, email) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const textMail = `Tu contraseña es: ${pass}`;
  const msg = {
    to: email,
    from: 'leo.vm.cba@gmail.com', // Use the email address or domain you verified above
    subject: 'Contraseña Turisticapp',
    text: textMail,
    // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  // ES6
  sgMail.send(msg).then(
    () => {},
    (error) => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    },
  );
}

async function emailLogin(email) {
  let existeAdmin = false;

  const admin = await db.admin.findOne({
    where: {
      email,
    },
  });

  if (!admin) {
    throw new Error('El email es incorrecto');
  }

  // Llamar función generadora de OTP
  const pwd = passwordService.generarOtp();

  // Llamar al método que genera limite de tiempo de uso del OTP
  // eslint-disable-next-line camelcase
  const limit_time = passwordService.limiTime();
  const passCreate = await passwordService.createPassword(pwd, limit_time);
  console.log('passCreate', passCreate);
  admin.password_id = passCreate.id;
  console.log('pass', passCreate.id);
  console.log('admin', admin);
  await admin.save();

  // Confirmar variable de control
  // eslint-disable-next-line prefer-const
  existeAdmin = true;
  enviarEmail(passCreate.password, admin.email);

  return { existeAdmin };
}

// Función para verificar password

async function verificarPassword(pwd) {
  const pass = await db.password.findOne({
    where: {
      password: pwd,
    },
  });

  if (!pass) {
    throw new Error('La contraseña es incorrecta');
  }

  const token = jwt.sign({
    id: db.admin.id,
    email: db.admin.email,
    name: db.admin.name,
    is_admin: true,
  }, 'ClaveUltraSecreta');
  return {
    accessToken: token,
  };
}

// Con el id de password buscamos en la tabla de admin el password_id
// SELECT roll, password_id FROM admins a WHERE id = 1

module.exports = {
  emailLogin,
  verificarPassword,
};
