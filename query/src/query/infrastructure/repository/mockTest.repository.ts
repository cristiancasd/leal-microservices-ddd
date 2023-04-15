import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from '../../domain/query.repository';

const MOCK_SCORE = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'cualquier nombre',
  score: 100
};

export class MockTestRepository implements QueryRepository {
  async updatePoints(scoreIn: QueryEntity): Promise<any> {
    const res = scoreIn;
    return res;
  }

  async getScoreById(id: string): Promise<QueryEntity | null> {
    const res = MOCK_SCORE;
    return id === MOCK_SCORE.id ? { ...res, id } : null;
  }
}
