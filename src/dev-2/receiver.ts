import amqp from "amqplib/callback_api" //importing amqp lib

//create connection
amqp.connect('amqp://localhost', (error, connection) => {
    if (error) {
        console.log(error.message);
    }
    // step 2 :otherwise create channel
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            console.log(channelError.message);

        }
        //step 3: assert queue =checks if queue is present in rabbitmq
        const QUEUE = 'CodingTest'
        channel.assertQueue(QUEUE);
        // step 4
        channel.consume(QUEUE, (msg) => {
            console.log(`message received: ${msg?.content}`)
        }, { noAck: true })
    })
})