
import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from "../../domain/query.repository";
import { QueryValue } from '../../domain/query.value';
import { DynamoDB } from "../db/dynamo-db";

export class DynamoRepository implements QueryRepository {
    
    private readonly _db = DynamoDB.getInstance()

    async addPoints (query: QueryEntity): Promise<QueryEntity> {
        

      console.log('estoy en createAdd de dynamo repositorio ', query, {TableName: DynamoDB.TABLE_NAME})


      await this._db.putItem({
          TableName: DynamoDB.TABLE_NAME,
          Item: {
            "documentCc": {
              N: query.documentCc.toString()
            },
            
            "id": {
              S: query.id
            },

            "name": {
              S: query.name
            },
            
            "score": {
              N: query.score.toString()
            },

            
          }
        }).promise()
        
        console.log('estoy esperando termine la promesa')
        return query
      }

    async getScoreById (documentCc: string): Promise<any|null> {
      console.log('estoy en repositorio ', documentCc)

      const response = await this._db.getItem({
        TableName: DynamoDB.TABLE_NAME,
        Key: {
          'documentCc': {N: documentCc}
        },
       // ProjectionExpression: 'documentCc'
      }).promise()

       const item =(response.Item)

      if (item === undefined ) return null


      return {
        documentCc:  item.documentCc.N,
        score:  item.score.N,
        name:  item.name.S,
        id: item.id.S,
      }
      
      return item;
    }

}