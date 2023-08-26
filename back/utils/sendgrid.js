const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendConfirmationEmail(toEmail, fromName, subject, bodyText, templateBody) {
  const msg = {
    to: toEmail,
    from: `"${fromName}" <${process.env.EMAIL_FROM}>`,
    subject: `${subject}`,
    text: `${bodyText}`,
    html: `${templateBody}`,
  };

  try {
    await sgMail.send(msg);
    return true;
  } catch (error) {
    throw new Error(`Error al enviar el correo de confirmación: ${error.message}`);
  }
}

module.exports = {
  sendConfirmationEmail,
};
