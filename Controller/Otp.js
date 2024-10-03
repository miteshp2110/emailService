const dotenv = require("dotenv");

dotenv.config();
const sendMail = require("../utils/sendMail");

const otp = async (req, res) => {
  const key = req.header("Authorization");
  if (key != process.env.API_KEY) {
    return res.status(403).send({ Error: "Wrong Api KEY" });
  }
  const body = req.body;
  let subject = `OTP from ${body.company}`;
  let otp = body.otp;
  let html = `<h1>Otp for forgot password</h1><br><p>Your otp is ${otp}</p>`;
  // let emailBody = "This your otp mail"
  console.log(subject);
  console.log(otp);
  await sendMail(body.user ?? "paliwalmitesh2110@gmail.com", subject, html);
  res.send("Otp");
};

module.exports = otp;
