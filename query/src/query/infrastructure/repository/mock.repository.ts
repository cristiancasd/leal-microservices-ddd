import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from '../../domain/query.repository';

const MOCK_SCORE = {
  id: 'cualquierId',
  documentCc: 4541,
  name: 'cualquier nombre',
  score: 23
};

export class MockRepository implements QueryRepository {
  async updatePoints(scoreIn: QueryEntity): Promise<any> {
    const res = MOCK_SCORE;
    return res;
  }

  async getScoreById(documentCc: number): Promise<QueryEntity> {
    const user = MOCK_SCORE;
    return user;
  }
}
