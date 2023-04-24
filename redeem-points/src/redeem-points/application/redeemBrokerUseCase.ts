import { BrokerRepository } from '../domain/broker/broker.repository';
import { BrokerValue } from '../domain/broker/broker.value';
import { BrokerError } from '../domain/errors/broker-error';
import { QueryEntity } from '../domain/query/query.entity';

export class RedeemBrokerUserCase {
  constructor(private readonly _brokerRepository: BrokerRepository) {}
  public sendMessageBroker = async (message: QueryEntity) => {
    const brokerValue = new BrokerValue(message);

    const redeemCreated = await this._brokerRepository.sendMessageBroker(
      brokerValue
    );

    if (redeemCreated) return redeemCreated;
    throw new BrokerError();
  };
}
