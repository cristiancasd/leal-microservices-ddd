import { BrokerRepository } from '../../domain/broker/broker.repository';
import { BrokerEntity } from '../../domain/broker/broker.entity';
import { producer } from '../broker/kafka';

export class KafkaRespository implements BrokerRepository {
  async sendMessageBroker(data: BrokerEntity): Promise<BrokerEntity | null> {
    try {
      console.log('Repository voy a intentar enviar mensaje KAFKA');

      await producer.send({
        topic: data.topic,
        messages: [{ value: JSON.stringify(data.message) }]
      });
      console.log('message sended to kafka');
      return data;
    } catch (err) {
      return null;
    }
  }
}
