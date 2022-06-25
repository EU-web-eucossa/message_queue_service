import { EventBus } from "./eventBus";

const queue1 = new EventBus('queue1')
const queue2 = new EventBus('queue2')
const queue3 = new EventBus('queue3')

queue1.receiveMessageFromQueue((message) => {
    console.log(message);

})
queue2.receiveMessageFromQueue((message) => {
    console.log(message);

})
queue3.receiveMessageFromQueue((message) => {
    console.log(message);

})