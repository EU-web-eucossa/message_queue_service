import amqplib from 'amqplib/callback_api'
class messageConsumed{
   public  queue: string;
   public channel="" ;
    constructor(queue:string,channel:""){
        this.queue=queue;
        this.channel=channel
    }
    message(){
       var message="";
       return message;
           };
        }
       
//creating a class to send messageto queue

class messageToQUEUE{
 queue:string;
 constructor(queue:string){
    this.queue=queue;
 }
}
