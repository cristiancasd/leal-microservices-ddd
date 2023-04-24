import { Kafka } from 'kafkajs';

const brokers = ['0.0.0.0:9092'];

const kafka = new Kafka({
  brokers,
  clientId: 'query-service'
});

export const consumer = kafka.consumer({
  groupId: 'query-service'
});

export async function disconnectConsumer() {
  await consumer.disconnect();
  console.log('Disconnected from consumer');
}

const topics = ['add_created', 'redeem_created'] as const;

export async function connectConsumer() {
  await consumer.connect();
  console.log('Connected to consumer');

  for (let i = 0; i < topics.length; i++) {
    console.log('subscribing topic: ', topics[i]);

    await consumer.subscribe({
      topic: topics[i],
      fromBeginning: true
    });
  }
}
