

import { KafkaMessage } from "kafkajs";
import { UpdateUseCase } from "../../application/updateUseCase";
import { QueryFromBrokerController } from "../controller/broker.ctrl";
import { DynamoRepository } from "../repository/dynamo.repository";
import { consumer } from "./kafka";



const redeemRepo = new DynamoRepository(); //to use db dynamoDB
const updateUseCase = new UpdateUseCase(redeemRepo);
const queryCtrl = new QueryFromBrokerController(updateUseCase);





export const listenBroker= async()=>{

  const topicToSubscribe: Record<string, Function> = {
    'add_created': queryCtrl.addPointsFromBroker,
    'redeem_created': queryCtrl.redeemPointsFromBroker,
  };


  
  interface InputKafka{
    topic: string;
    partition: number;
    message: KafkaMessage
  }
  
  await consumer.run({
    eachMessage: async (input:InputKafka) => {
      if (!input.message || !input.message.value) return;
      const data = JSON.parse(input.message.value.toString());
  
      const handler = topicToSubscribe[input.topic];
      if (handler) {
        console.log('llegó el kafka con info ', data)
        //handler(data);
        handler(data);
      }
    },
  });
}


