import { RedeemBrokerUserCase } from '../../../../redeem-points/application/redeemBrokerUseCase';
import { BrokerError } from '../../../../redeem-points/domain/errors/broker-error';
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

const expectResponse = {
  topic: 'redeem_created',
  message: data
};

describe('UNIT redeemBrokerUseCase -> sendMessageBroker', () => {
  it('should create a new object type BrokerEntity', async () => {
    const redeemBroker = new KafkaRespository();
    const redeemBrokerUseCase = new RedeemBrokerUserCase(redeemBroker);
    const res = await redeemBrokerUseCase.sendMessageBroker(data);
    expect(res).toMatchObject(expectResponse);
  });

  it('should return a BrokerError if the producer is disconect', async () => {
    await disconnectProducer();
    const redeemBroker = new KafkaRespository();
    const redeemBrokerUseCase = new RedeemBrokerUserCase(redeemBroker);
    try {
      const res = await redeemBrokerUseCase.sendMessageBroker(data);
      expect(res?.topic).toEqual('itsToBeShureThatExpectTheErrorCatch');
    } catch (err) {
      expect(err).toBeInstanceOf(BrokerError);
    }
  });
});
