import amqplib from 'amqplib/callback_api'

amqplib.connect('amqp://localhost', (error, connection) => {
    if (error) {
        console.log(error);
    }
    //crreate a channel
    connection.createChannel((channelerror, channel1) => {
        if (channelerror) {
            console.log(channelerror.message)
        };
        var queue = 'shipment';
        channel1.assertQueue(queue)
        //consuming the message
        channel1.consume(queue, (msg) => [
            console.log(`message succesfully received: ${msg?.content}`)

        ], { noAck: true }
        );
    })
})