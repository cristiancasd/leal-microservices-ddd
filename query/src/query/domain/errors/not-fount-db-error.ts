import { CustomError } from './custom-error';

export class NotFoundDbError extends CustomError {
  statusCode = 404;

  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, NotFoundDbError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
