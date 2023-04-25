import { CustomError } from './custom-error';

export class BrokerError extends CustomError {
  statusCode = 500;

  constructor() {
    super('Broker Error');
    Object.setPrototypeOf(this, BrokerError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Broker Error' }];
  }
}
