import { BrokerRepository } from '../../domain/broker/broker.repository';
import { BrokerEntity } from '../../domain/broker/broker.entity';
import { producer } from '../broker/kafka';

export class KafkaRespository implements BrokerRepository {

  async sendMessageBroker(data: BrokerEntity): Promise<BrokerEntity> {
    producer.send({
        topic: data.topic,
        messages: [{ value:  JSON.stringify(data.message)  }]
      });
      return data;
  }
}
