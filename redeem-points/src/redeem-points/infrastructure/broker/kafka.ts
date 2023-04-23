import { Kafka } from 'kafkajs';

//It is a service that hosts a topic, each broker is identify for a unique ID
const brokers = ['0.0.0.0:9092']; // enter to Docker container and look for Ports

const kafka = new Kafka({
  clientId: 'redeem-points-app',
  brokers
});

export const producer = kafka.producer();

export async function connectProducer() {
  await producer.connect();
  console.log('Producer connected');
}

export async function disconnectProducer() {
  await producer.disconnect();
  console.log('Producer disconnected');
}
