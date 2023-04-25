import { BrokerRepository } from '../domain/broker/broker.repository';
import { BrokerValue } from '../domain/broker/broker.value';
import { BrokerError } from '../domain/errors/broker-error';
import { QueryEntity } from '../domain/query/query.entity';

export class AddBrokerUserCase {
  constructor(private readonly _brokerRepository: BrokerRepository) {}
  public sendMessageBroker = async (message: QueryEntity) => {
    const brokerValue = new BrokerValue(message);
    const addCreated = await this._brokerRepository.sendMessageBroker(
      brokerValue
    );
    if (addCreated) return addCreated;
    throw new BrokerError();
  };
}
