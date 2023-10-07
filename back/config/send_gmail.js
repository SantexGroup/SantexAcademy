const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const sendMail = async (req, res) => {
  const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENTE_SECRET,
    process.env.REDIRECT_URI
  );

  oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
  try {
    const accessToken = await oauth2Client.getAccessToken();

    const transporte = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MY_EMAIL,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENTE_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "VolunTime <voluntime23@gmail.com>",
      to: `${process.env.MY_EMAIL}`,
      subject: `${req.body.full_name}`,
      html: `
      <p><strong>Correo enviado por:</strong> ${req.body.email}</p>
      <p><strong>Mensaje:</strong></p>
      <div style="background-color: #f3f3f3; padding: 10px;">
        ${req.body.message}
      </div>
    `,
    };
    if (req.body) {
      const result = await transporte.sendMail(mailOptions);
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = {
  sendMail,
};
