const amqp = require("amqplib");
const notificationMail = require('../EmailTemplate/notificationMail')
const queue = "notificationQueue";
const sendMail = require('../utils/sendMail')

async function consumeMail(){
    try{
        const connection = await amqp.connect("amqp://localhost")
        const channel = await connection.createChannel()

        await channel.assertQueue(queue,{durable:true})
        channel.consume(queue,async (message)=>{
            if(message!=null){
                const messageBody = JSON.parse(message.content)
                let mailBody = notificationMail(messageBody.notificationTitle,messageBody.notificationBody,messageBody.subject,messageBody.recipientName)
                 await sendMail(messageBody.recipient,messageBody.subject,mailBody)
                // console.log("Consumed email")
                channel.ack(message)
            }
        })
    }
    catch (error) {
        console.log(error);
    }
}
module.exports = consumeMail;