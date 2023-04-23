import { RedeemEntity } from '../../domain/redeem/redeem.entity';
import { RedeemRepository } from '../../domain/redeem/redeem.repository';
import { DynamoDB } from '../db/dynamo-db';

export class DynamoRepository implements RedeemRepository {
  private readonly _db = DynamoDB.getInstance();

  async createRedeem(redeem: RedeemEntity): Promise<RedeemEntity | null> {
    try {
      await this._db
        .putItem({
          TableName: DynamoDB.TABLE_NAME,
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
