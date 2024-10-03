const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

async function sendMail(recipient, subject, html) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SERVICE_EMAIL,
      pass: process.env.SERVICE_PASSWORD,
    },
    connectionTimeout: 10000, // Default is 10000 (10 seconds)
    greetingTimeout: 10000, // Default is 10000 (10 seconds)
    socketTimeout: 20000, // Default is 20000 (20 seconds)
    debug: true, // show debug
    logger: true, // log information in console
  });

  const mailOptions = {
    from: process.env.SERVICE_EMAIL,
    to: recipient,
    subject: subject,
    html: html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return 200;
  } catch (error) {
    console.log(error);
    return 500;
  }
}

module.exports = sendMail;
