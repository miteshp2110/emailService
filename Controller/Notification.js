const dotenv = require("dotenv");
const addNotification = require('../utils/producer')

dotenv.config();

const notification = ( async (req,res)=>{
    const key = req.header('Authorization');
    if (key != process.env.API_KEY){
        return res.status(403).send({"Error":"Wrong Api KEY"})
    }
    const body = req.body;
    const subject = body.company
    const notificationData = body.notificationBody
    const recipient = body.recipient
    // console.log(body)

    const emailData = {
        "subject": subject,
        "notificationTitle":body.notificationTitle,
        "notificationBody": notificationData,
        "recipientName":body.recipientName,
        "recipient": recipient,
    }
    try{
        const producerResponse = await addNotification(emailData)
        if(producerResponse){

            return res.status(200).send({"Success":"Email Added to Queue"})
        }
        else{
            return res.status(500).send({"Error":"Something went wrong"})
        }
    }
    catch (error){
        console.log(error);
        return res.status(500).send({"Error":"Something went wrong"})
    }


})



module.exports = notification;