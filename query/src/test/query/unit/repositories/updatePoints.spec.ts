import { DynamoRepository } from '../../../../query/infrastructure/repository/dynamo.repository';
import { MockTestRepository } from '../../../../query/infrastructure/repository/mockTest.repository';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'unit test',
  score: 8789
};

describe('UNIT Respository MOCK -> updatePoints  ', () => {
  it('should update the db score (MOCK DB) to data socre', async () => {
    const repo = new MockTestRepository();
    const response = await repo.updatePoints(data);
    expect(response?.score).toEqual(data.score);
  });

  it('should update the db score (DYNAMO DB) to data socre', async () => {
    const repo = new DynamoRepository();
    const response = await repo.updatePoints(data);
    expect(response?.score).toEqual(data.score);
  });
});
