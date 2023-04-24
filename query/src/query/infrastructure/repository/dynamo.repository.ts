import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from '../../domain/query.repository';
import { DynamoDB } from '../db/dynamo-db';

export class DynamoRepository implements QueryRepository {
  private readonly _db = DynamoDB.getInstance();

  async updatePoints(query: QueryEntity): Promise<QueryEntity | null> {
    try{
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
    }catch(err){
      return null
    }
   
  }

  async getScoreById(documentCc: number): Promise<QueryEntity | null | string > {
    //console.log('buscando ...', id);
    console.log('voy a buscar ',documentCc )
    
    
    try{
      const response = await this._db
      .getItem({
        TableName: DynamoDB.TABLE_NAME,
        Key: {
          documentCc: { N: documentCc.toString() }
        }
        // ProjectionExpression: 'documentCc'
      })
      .promise();
      const item = response.Item;
      if ( !item) return 'Dont exist user, try with other ID';
      
      return item.name.S && item.id.S && item.documentCc.N && item.score.N
      ? {
          documentCc: +item.documentCc.N,
          score: +item.score.N,
          name: item.name.S,
          id: item.id.S
        }
      : null;
      
    }catch(err){
      return null;
    }
    
  }
}
