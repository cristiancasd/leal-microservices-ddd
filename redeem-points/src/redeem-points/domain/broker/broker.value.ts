import { QueryEntity } from '../query/query.entity';
import { BrokerEntity } from './broker.entity';

export class BrokerValue implements BrokerEntity {
  topic: string;
  message: QueryEntity;

  constructor(message: QueryEntity) {
    this.topic = 'redeem_created';
    this.message = message;
  }
}
