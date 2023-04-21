import { Kafka, KafkaMessage } from "kafkajs";
//import { topicToSubscribe } from "./routes";

import { UpdateUseCase } from "../../application/updateUseCase";
import { QueryFromBrokerController } from "../controller/broker.ctrl";
import { DynamoRepository } from "../repository/dynamo.repository";


const brokers = ["0.0.0.0:9092"];

const kafka = new Kafka({
  brokers,
  clientId: "query-service",
});

export const consumer = kafka.consumer({
  groupId: "query-service",
});


export async function disconnectConsumer() {
  await consumer.disconnect();
  console.log("Disconnected from consumer");
}

/*
interface InputKafka{
    topic: string;
    partition: number;
    message: KafkaMessage
}
*/

const topics = ["add_created", "redeem_created"] as const;

export async function connectConsumer() {
  await consumer.connect();
  console.log("Connected to consumer");

  for (let i = 0; i < topics.length; i++) {
    console.log("subscribing topic: ", topics[i]);

    await consumer.subscribe({
      topic: topics[i],
      fromBeginning: true,
    });
  }
  /*
  await consumer.run({
    eachMessage: async (input:InputKafka) => {
      if (!input.message || !input.message.value) return;
      const data = JSON.parse(input.message.value.toString());
      console.log('llegó INICIO el kafka con info ', data)

      const handler = topicToSubscribe[input.topic];
      console.log('handler ', handler)
      if (handler) {
        console.log('llegó el kafka con info ', data)
        //handler(data);
        handler(data);
      }
    },
  });*/
}

/*

const redeemRepo = new DynamoRepository(); //to use db dynamoDB
const updateUseCase = new UpdateUseCase(redeemRepo);
const queryCtrl = new QueryFromBrokerController(updateUseCase);


export const topicToSubscribe: Record<string, Function> = {
  'add_created': queryCtrl.addPointsFromBroker,
};*/
