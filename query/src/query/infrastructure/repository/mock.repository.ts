
/**
 * MOCK!
 */

import { QueryEntity } from "../../domain/query.entity";
import { QueryRepository } from "../../domain/query.repository";

const MOCK_SCORE = {
    id:'sdasdada',
    documentCc: 4541,
    name: "Leifer",
    score: 23,
  };

export class MockRepository implements QueryRepository {
 
  async addPoints(scoreIn: QueryEntity): Promise<any> {
    const user = MOCK_SCORE
    return user
  }
  


  async getScoreById(documentCc: String): Promise<QueryEntity> {
    const user = MOCK_SCORE
    return user;
  }

}
