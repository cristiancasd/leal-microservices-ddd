import { QueryEntity } from '../../domain/query.entity';
import { QueryRepository } from '../../domain/query.repository';

const MOCK_SCORE = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'cualquier nombre',
  score: 100
};

export class MockTestRepository implements QueryRepository {
  async updatePoints(scoreIn: QueryEntity): Promise<QueryEntity> {
    const res = scoreIn;
    return res;
  }

  async getScoreById(documentCc: number): Promise<QueryEntity | string> {
    const res = MOCK_SCORE;
    return documentCc === MOCK_SCORE.documentCc
      ? { ...res, documentCc }
      : 'User dont have data';
  }
}
