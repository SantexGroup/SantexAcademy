const nodemailer = require("nodemailer");

const options = {
  host: "mail.gmx.com",
  port: 587,
  auth: {
      user: process.env.DIRECTION_MAIL,
      pass: process.env.PASSWORD_MAIL,
  },
};


module.exports = nodemailer.createTransport(options);