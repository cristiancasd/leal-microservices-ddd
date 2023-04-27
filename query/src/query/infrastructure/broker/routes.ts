import { KafkaMessage } from 'kafkajs';
import { UpdateUseCase } from '../../application/updateUseCase';
import { QueryFromBrokerController } from '../controller/broker.ctrl';
import { DynamoRepository } from '../repository/dynamo.repository';
import { consumer } from './kafka';

const redeemRepo = new DynamoRepository(); //to use db dynamoDB
const updateUseCase = new UpdateUseCase(redeemRepo);
const queryBrokerCtrl = new QueryFromBrokerController(updateUseCase);

export const listenBroker = async () => {
  const topicToSubscribe: Record<string, Function> = {
    add_created: queryBrokerCtrl.addPointsFromBroker,
    redeem_created: queryBrokerCtrl.redeemPointsFromBroker
  };

  interface InputKafka {
    topic: string;
    partition: number;
    message: KafkaMessage;
  }

  await consumer.run({
    eachMessage: async (input: InputKafka) => {
      console.log('arrive message ', input.topic);

      if (!input.message || !input.message.value) return;
      const data = JSON.parse(input.message.value.toString());

      const handler = topicToSubscribe[input.topic];
      if (handler) {
        console.log('arrive message with topic : ', input.topic);

        handler(data);
      }
    }
  });
};
