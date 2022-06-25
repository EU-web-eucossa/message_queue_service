import { Connection, Channel, connect } from 'amqplib/callback_api'

export class EventBus {
    private queue: string
    private connectionString = 'amqp://localhost'

    constructor(queueName: string) {
        this.queue = queueName
    }

    sendMessageToQueue = (message: string) => {
        connect(this.connectionString, (error: any, connection: Connection) => {

            if (error) {
                console.log('Error creating connection', error.message);
            }
            connection.createChannel((err: any, channel: Channel) => {
                if (err) {
                    console.log('Error creating channel,', err.message);

                }
                channel.assertQueue(this.queue)
                channel.sendToQueue(this.queue, Buffer.from(message))
                console.log("Sent a message to the channel");
                
            })
        })
    }

    receiveMessageFromQueue = (callback: (message: string) => void) => {
        connect(this.connectionString, (error: any, connection: Connection) => {

            if (error) {
                console.log('Error creating connection', error.message);
            }
            connection.createChannel((err: any, channel: Channel) => {
                if (err) {
                    console.log('Error creating channel,', err.message);

                }
                channel.assertQueue(this.queue)
                channel.consume(this.queue, (message) => {
                    callback(message!?.content.toString())
                }, { noAck: true })
                console.log("Received message from this cahnnel");
                // channel.close()
            })
        })
    }
}
