const amqp = require("amqplib");
const dotenv = require("dotenv");
const notificationMail = require('../EmailTemplate/notificationMail')
const queue = "notificationQueue";
const sendMail = require('../utils/sendMail')
dotenv.config();
const rabbitMq_url = `amqp://${process.env.RABBITMQ_HOST}`

async function consumeMail(){
    try{
        const connection = await amqp.connect(rabbitMq_url)
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