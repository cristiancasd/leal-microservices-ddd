import { GetUseCase } from '../../../query/application/getUseCase';
import { MockTestRepository } from '../../../query/infrastructure/repository/mockTest.repository';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541, //the same document Cc of MOCK db
  name: 'cualquier nombre',
  score: 40
};

describe('UNIT queryUseCase -> GET Score ', () => {
  it('should get current score of Mock Test Db', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const getUseCase = new GetUseCase(repo);
    const res = await getUseCase.getScoreById(data.documentCc);
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(100); //100 base mock, 40 added
  });

  it('should get Error when CC dont exist in MockTest DB', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const getUseCase = new GetUseCase(repo);
    try {
      const res = await getUseCase.getScoreById(7845154);
    } catch (err) {
      expect(err instanceof Error).toBe(true);
    }
  });
});
