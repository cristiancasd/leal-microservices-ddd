import { BrokerEntity } from './broker.entity';

export interface BrokerRepository {
  sendMessageBroker(sendMessage: BrokerEntity): Promise<BrokerEntity | null>;
}
