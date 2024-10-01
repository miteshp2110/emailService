const dotenv = require("dotenv");

dotenv.config();

const otpEmail = ((req,res)=>{
    const key = req.header('Authorization');
    if (key != process.env.API_KEY){
        return res.status(403).send({"Error":"Wrong Api KEY"})
    }
    res.send("Otp")
})

module.exports = otpEmail;