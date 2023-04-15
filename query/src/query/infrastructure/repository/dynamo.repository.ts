import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from '../../domain/query.repository';
import { DynamoDB } from '../db/dynamo-db';

export class DynamoRepository implements QueryRepository {
  private readonly _db = DynamoDB.getInstance();

  async updatePoints(query: QueryEntity): Promise<QueryEntity> {
    await this._db
      .putItem({
        TableName: DynamoDB.TABLE_NAME,
        Item: {
          documentCc: {
            N: query.documentCc.toString()
          },

          id: {
            S: query.id
          },

          name: {
            S: query.name
          },

          score: {
            N: query.score.toString()
          }
        }
      })
      .promise();

    return query;
  }

  async getScoreById(documentCc: number): Promise<any | null> {
    //console.log('buscando ...', id);
    const response = await this._db
      .getItem({
        TableName: DynamoDB.TABLE_NAME,
        Key: {
          documentCc: { N: documentCc.toString() }
        }
        // ProjectionExpression: 'documentCc'
      })
      .promise();

    //console.log('response ', response);
    const item = response.Item;

    if (item === undefined) return null;

    return {
      documentCc: item.documentCc.N,
      score: item.score.N,
      name: item.name.S,
      id: item.id.S
    };

    return item;
  }
}
