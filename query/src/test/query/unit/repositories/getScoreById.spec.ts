import { DynamoRepository } from '../../../../query/infrastructure/repository/dynamo.repository';
import { MockTestRepository } from '../../../../query/infrastructure/repository/mockTest.repository';
import { DynamoRepositoryError } from '../../../setup';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541, //the same document Cc of MOCK db
  name: 'cualquier nombre',
  score: 40
};

describe('UNIT Respository MOCK -> getScoreById  ', () => {
  it('should get current score of Mock Test Db', async () => {
    const repo = new MockTestRepository();
    const response = await repo.getScoreById(data.documentCc);
    expect(typeof response !== 'string').toEqual(true);
    if (typeof response !== 'string') {
      expect(response?.score).toBeDefined();
      expect(response?.score).toEqual(100); // the score in MOCK db
    }
  });

  it('should return a string Message when I try to get a Id and not exist in DB', async () => {
    const repo = new MockTestRepository();
    const response = await repo.getScoreById(897);
    expect(typeof response === 'string').toEqual(true);
  });
});

describe('UNIT Respository DYNAMO -> getScoreById  ', () => {
  it('should get current score of DYNAMO Test Db', async () => {
    const repo = new DynamoRepository();
    await repo.updatePoints(data);
    const response = await repo.getScoreById(data.documentCc);
    expect(typeof response !== 'string').toEqual(true);
    if (typeof response !== 'string') {
      expect(response?.score).toBeDefined();
      expect(response?.score).toEqual(data.score);
    }
  });

  it('should return a string message when I try to get a Id and dont exist in DB', async () => {
    const repo = new DynamoRepository();
    const response = await repo.getScoreById(4946464164);
    expect(typeof response === 'string').toEqual(true);
  });

  it('should return Null when I cant connect to DB', async () => {
    const repo = new DynamoRepositoryError(); //table data name is wrong
    const response = await repo.getScoreById(4946464164);
    expect(response).toBeNull();
  });
});
