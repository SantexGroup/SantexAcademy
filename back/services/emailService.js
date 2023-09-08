const nodemailer = require('nodemailer');
const fs = require('fs');

// Configuracion SMTP creando objeto transporter
const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
  return transport;
};

// Funcion para enviar correo de confirmacion
const sendMail = (user) => {
  // Datos del transporte creado
  const transporter = createTrans();
  // Conecta a traves de emalHtml este archivo y la plantilla html para pasar username
  const emailHtml = fs.readFileSync('./themes/email/email-register.html', 'utf8');
  // Reemplazar {{username}} con el nombre de usuario real
  const personalizedHtml = emailHtml.replace(/{{username}}/g, user.username)
    .replace(/{{nombre}}/g, user.nombre)
    .replace(/{{password}}/g, user.password);
  // Datos del correo electronico
  const mailOptions = {
    from: '"Academy del NOC" <academyinnoc@gmail.com>',
    to: user.email,
    subject: `Confirmación de Registro para ${user.username}`,
    // text: 'Haga clic en el enlace para confirmar su registro: http://localhost4200/confirmacion?codigo=(generarUnCodigo)',
    html: `<style> ${fs.readFileSync('./themes/email/email-register.css', 'utf8')} </style>
    <div>${personalizedHtml}</div>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Correo enviado: ${info.response}`);
    }
  });
};

module.exports = { sendMail };
