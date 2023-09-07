// const { Resend } = require('resend');
// const resend = new Resend('re_EshLx1Eb_Eo1dtF2zTLxa6WZWmggP9XwF');
// resend.domains.create({ name: 'example.com' });

// const sendConfirmationEmail = async (toEmail, username) => {
//   try {
//     const data = await resend.emails.send({
//       from: 'Academy In NOC <onboarding@resend.dev>',
//       to: [toEmail, 'delivered@resend.dev'],
//       subject: 'Confirmación de registro',
//       html: `
//         <p>Hola ${username},</p>
//         <p>Gracias por registrarte en nuestro sitio.</p>
//         <p>Haga clic <a href="https://localhost4200/confirmacion? codigo="$"{codigo}">aquí</a> para confirmar su registro.</p>
//       `,
//     });

//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// module.exports = {
//   sendConfirmationEmail,
// };
