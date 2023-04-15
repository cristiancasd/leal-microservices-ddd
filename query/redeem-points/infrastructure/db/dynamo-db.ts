import AWS from './aws';
import 'dotenv/config';

export class DynamoDB {
  static TABLE_NAME: string =
    process.env.NODE_ENV === 'production'
      ? 'leal-redeem-points'
      : 'leal-redeem-points-testing';

  private static _INSTANCE: AWS.DynamoDB;

  static getInstance(options?: AWS.DynamoDB.ClientConfiguration): AWS.DynamoDB {
    if (this._INSTANCE === undefined) {
      this._INSTANCE = new AWS.DynamoDB(options);
    }
    return this._INSTANCE;
  }
}
