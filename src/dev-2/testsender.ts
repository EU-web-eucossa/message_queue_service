import amqp from "amqplib/callback_api"//adding the library

//connecting to channel
amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        console.log(error);
    }
    //creating channel
    connection.createChannel((error, channel1) => {
        if (error) {
            console.log(error)
        };
        //creating a queue 
        var queue = 'shipment';
        var msg = 'your shipment has been sent'; //creating message to be sent to the queue
        //asserting if there is a queue
        channel1.assertQueue(queue)
        //sending message to queue
        channel1.sendToQueue(queue, Buffer.from(msg))
        console.log(`the message has been sent :`, JSON.stringify(msg));
        setTimeout(function () { }, 4000);
    });

})