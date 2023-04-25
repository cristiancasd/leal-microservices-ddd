import { Kafka } from 'kafkajs';

//It is a service that hosts a topic, each broker is identify for a unique ID
// enter to Docker container and look for Ports
const brokers =
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
    ? process.env.BROKER_SERVICE_NAME
      ? [process.env.BROKER_SERVICE_NAME]
      : ['0.0.0.0:9092']
    : ['0.0.0.0:9093'];

const kafka = new Kafka({
  clientId: 'redeem-points-app',
  brokers
});

export const producer = kafka.producer();

export async function connectProducer() {
  console.log('Conencting Producer to port: ', brokers);
  await producer.connect();
  console.log('Producer connected, port: ', brokers);
}

export async function disconnectProducer() {
  await producer.disconnect();
  console.log('Producer disconnected');
}
