import { BrokerValue } from '../../../../redeem-points/domain/broker/broker.value';
import {
  connectProducer,
  disconnectProducer
} from '../../../../redeem-points/infrastructure/broker/kafka';
import { KafkaRespository } from '../../../../redeem-points/infrastructure/repository/kafka.repository';

beforeAll(async () => {
  await connectProducer();
});

afterAll(async () => {
  //await disconnectProducer();
});
const data = {
  documentCc: 998752,
  name: 'redeemBrokerUseCase',
  score: 54,
  id: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

const message = {
  topic: 'redeem_created',
  message: data
};

describe('UNIT Respository KAFKA -> sendMessageBroker', () => {
  it('should return a object BrokerEntity when I send a message to Kafka', async () => {
    const repo = new KafkaRespository();
    const messageSended = await repo.sendMessageBroker(message);
    expect(messageSended).toMatchObject(message);
  });

  it('should return Null if the producer is disconect', async () => {
    await disconnectProducer();
    const repo = new KafkaRespository();
    const messageSended = await repo.sendMessageBroker(message);
    expect(messageSended).toBeNull();
  });
});
