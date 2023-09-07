const nodemailer = require('nodemailer');

// Configuracion SMTP creando objeto transporter
const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525, // 25 or 465 or 587 or 2525
    secure: false, // True para 465, false para otros puertos
    auth: {
      user: '3f9c45e86a000b',
      pass: '109a2dce09f36a',
    },
  });
  return transport;
};

// Funcion para enviar correo de confirmacion
const sendMail = (user) => {
  // Datos del transporte creado
  const transporter = createTrans();
  // Datos del correo electronico
  const mailOptions = {
    from: '"Academy del NOC" <academyinnoc@gmail.com>',
    to: user.email,
    subject: `Confirmación de Registro para ${user.username}`,
    text: 'Haga clic en el enlace para confirmar su registro: http://localhost4200/confirmacion?codigo=(generarUnCodigo)',
    html: `<b>Por favor copie y pegue en su navegador el siguiente link o haga click sobre el, para comenzar a usar su cuenta:</b>
        <a href="http://localhost:4200/dashboard">http://local:4200/dashboard</a>`,
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
