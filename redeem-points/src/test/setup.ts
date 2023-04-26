import { RedeemEntity } from '../redeem-points/domain/redeem/redeem.entity';
import { RedeemRepository } from '../redeem-points/domain/redeem/redeem.repository';
import { disconnectProducer } from '../redeem-points/infrastructure/broker/kafka';
import { DynamoDB } from '../redeem-points/infrastructure/db/dynamo-db';

//todo: delete all data by table after tests.
jest.setTimeout(100000);

afterAll(async () => {
  await disconnectProducer();
});

export class DynamoRepositoryError implements RedeemRepository {
  private readonly _db = DynamoDB.getInstance();

  async createRedeem(redeem: RedeemEntity): Promise<RedeemEntity | null> {
    try {
      await this._db
        .putItem({
          TableName: 'ThisDBNameDontExist',
          Item: {
            id: {
              S: redeem.id
            },

            name: {
              S: redeem.name
            },
            documentCc: {
              N: redeem.documentCc.toString()
            },
            points: {
              N: redeem.points.toString()
            },
            detail: {
              S: redeem.detail
            },
            idUser: {
              S: redeem.idUser
            }
          }
        })
        .promise();

      return redeem;
    } catch (err) {
      return null;
    }
  }
}
