import { CustomError } from './custom-error';

export class DataBaseError extends CustomError {
  statusCode = 500;

  constructor() {
    super('data base error');

    Object.setPrototypeOf(this, DataBaseError.prototype);
  }

  serializeErrors() {
    return [{ message: 'Data Base Error' }];
  }
}
