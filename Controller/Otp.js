const dotenv = require("dotenv");
const otpForForgotPasssword = require('../EmailTemplate/forgotPassword')

dotenv.config();
const sendMail = require("../utils/sendMail");

const otp = (async (req,res)=>{
    const key = req.header('Authorization');
    if (key != process.env.API_KEY){
        return res.status(403).send({"Error":"Wrong Api KEY"})
    }
    const body = req.body;
    let subject = body.company
    let otp = body.otp
    let recipient = body.recipient;
    let emailBody = otpForForgotPasssword(otp,subject)
    const resp = await sendMail(recipient,subject,emailBody)
    if(resp === 200){
        return res.status(200).send({"Success":"Email sent successfully"})
    }else{
        return res.status(500).send({"Error":"Something went wrong"})
    }
})


module.exports = otp;
