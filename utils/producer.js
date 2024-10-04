const amqp = require("amqplib");

const exchange = "notificationExchange"
const routingKey = "addNotification";
const queue = "notificationQueue";


async function addNotification(emailData) {
    try{
        const connection = await amqp.connect("amqp://localhost");
        const channel = await connection.createChannel();

        await channel.assertExchange(exchange,"direct",{durable:true});
        await channel.assertQueue(queue,{durable:true});

        await channel.bindQueue(queue,exchange,routingKey)

        channel.publish(exchange,routingKey,Buffer.from(JSON.stringify(emailData)))
        // console.log("Notification Added to Queue")

        return true
    }
    catch(err){
        console.error(err);
        return false
    }

}

module.exports = addNotification;