import amqp from "amqplib/callback_api" //importing amqp lib
//create connection
 amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        console.log(error.message);
    }
    // step 2 :otherwise create channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            console.log("Channel error: ", channelError.message);

        }
        //step 3: assert queue =checks if queue is present in rabbitmq
        const QUEUE = 'CodingTest'
        channel.assertQueue(QUEUE);
        //STEP 4: SENDING TH MESSAGE TO THE QUEUE
        channel.sendToQueue(QUEUE, Buffer.from(JSON.stringify({
            message: "Hi there",
            from: QUEUE
        })));
        console.log(`message send $[QUEUE]`);
    })

})