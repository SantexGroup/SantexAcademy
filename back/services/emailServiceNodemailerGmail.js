// const nodemailer = require('nodemailer');

// // Configuracion SMTP creando objeto transporter
// const transporter = nodemailer.createTransport({
//   service: 'smtp.gmail.com',
//   port: 587,
//   secure: false,// True para 465, false para otros puertos
//   auth: {
//     user: 'academyinnoc@gmail.com',
//     pass: 'dmemzxtqmuysnxgj',
//   }
// });

// // Definir función para enviar correo de confirmación
// const sendConfirmationEmail = (emailUsuario) => {
//   // Datos del correo electronico
//   const mailOptions = {
//     from: 'academyinnoc@gmail.com',
//     to: emailUsuario,
//     subject: 'Confirmación de Registro',
//     text: 'Haga clic en el enlace para confirmar su registro: http://localhost4200/confirmacion?codigo=(generarUnCodigo)',
//     html: `<b>Por favor copie y pegue en su navegador el siguiente link o haga click sobre el, para comenzar a usar su cuenta:</b>
//     <a href="http://localhost:4200/dashboard">http://local:4200/dashboard</a>`,
//   };

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Correo enviado: ' + info.response);
//     }
//   });
// };

// module.exports = {
//   sendConfirmationEmail
// };
