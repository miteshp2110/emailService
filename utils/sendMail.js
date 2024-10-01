const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
async function sendMail(recipient,subject,text) {


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SERVICE_EMAIL,
            pass: process.env.SERVICE_PASSWORD,
        },

    });

    const mailOptions = {
        from: process.env.SERVICE_EMAIL,
        to: recipient,
        subject: subject,
        text: text,
    }

    try{
        await transporter.sendMail(mailOptions);
        return 200;
    }
    catch (error) {
        console.log(error);
        return 500;
    }

}

module.exports = sendMail;