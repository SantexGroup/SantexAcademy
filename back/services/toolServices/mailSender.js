// eslint-disable-next-line import/no-unresolved
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PWD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transporter;
