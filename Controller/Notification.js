const dotenv = require("dotenv");

dotenv.config();

const notification = ((req,res)=>{
    const key = req.header('Authorization');
    if (key != process.env.API_KEY){
        return res.status(403).send({"Error":"Wrong Api KEY"})
    }
    console.log("auth:",key);
    res.send("From Notification");
})

module.exports = notification;