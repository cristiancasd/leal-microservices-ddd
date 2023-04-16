import { AddEntity } from '../../domain/addPoints/add.entity';
import { AddRepository } from '../../domain/addPoints/add.repository';
import { DynamoDB } from '../db/dynamo-db';

export class DynamoRepository implements AddRepository {
  private readonly _db = DynamoDB.getInstance();

  async createAdd(add: AddEntity): Promise<AddEntity> {
    await this._db
      .putItem({
        TableName: DynamoDB.TABLE_NAME,
        Item: {
          id: {
            S: add.id
          },

          name: {
            S: add.name
          },
          documentCc: {
            N: add.documentCc.toString()
          },
          points: {
            N: add.points.toString()
          },
          detail: {
            S: add.detail
          },
          idUser: {
            S: add.idUser
          }
        }
      })
      .promise();

    return add;
  }
}
