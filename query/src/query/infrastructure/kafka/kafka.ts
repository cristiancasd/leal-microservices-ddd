import { Kafka, KafkaMessage } from "kafkajs";

const brokers = ["0.0.0.0:9092"];


const kafka = new Kafka({
  brokers,
  clientId: "notifications-service",
});

const consumer = kafka.consumer({
  groupId: "notifications-service",
});


export async function disconnectConsumer() {
  await consumer.disconnect();
  console.log("Disconnected from consumer");
}

const topics = ["add_created"] as const;


function messageCreatedHandler(data:string) {
  console.log("Estoy dentro de la función de: ", JSON.stringify(data, null, 2));
}

//const topicToSubscribe: Record<typeof topics[number], Function> = {
const topicToSubscribe: Record<string, Function> = {
  'add_created': messageCreatedHandler,
};


interface InputKafka{
    topic: string;
    partition: number;
    message: KafkaMessage
}


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
  
  await consumer.run({
    eachMessage: async (input:InputKafka) => {
      if (!input.message || !input.message.value) return;
      const data = JSON.parse(input.message.value.toString());
      const handler = topicToSubscribe[input.topic];
      if (handler) {
        handler(data);
      }
    },
  });
}