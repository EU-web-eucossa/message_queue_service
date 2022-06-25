import { EventBus } from "./eventBus";

const queue1 = new EventBus('queue1')
const queue2 = new EventBus('queue2')
const queue3 = new EventBus('queue3')

queue1.sendMessageToQueue(JSON.stringify({
    name: "I Am Queue 1",
    message: "Cart service"
}))
queue2.sendMessageToQueue(JSON.stringify({
    name: "I Am Queue 2",
    message: "Orders service"
}))
queue3.sendMessageToQueue(JSON.stringify({
    name: "I Am Queue 3",
    message: "Product sservice"
}))