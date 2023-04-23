import { DynamoRepository } from '../../../../redeem-points/infrastructure/repository/dynamo.repository';
import { MockTestRepository } from '../../../../redeem-points/infrastructure/repository/mockTest.repository';
import { DynamoRepositoryError } from '../../../setup';

const data = {
  id: 'cualquierID',
  documentCc: 455554,
  name: 'createRedeem',
  points: 54,
  detail: 'puntos por comprar una nevera',
  idUser: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

describe('UNIT Respository -> createRedeem  ', () => {
  it('should return a object RedeemEntity from (MOCK DB)', async () => {
    const repo = new MockTestRepository();
    const response = await repo.createRedeem(data);
    expect(response).toMatchObject(data);
  });

  it('should return a object RedeemEntity from (Dynamo DB)', async () => {
    const repo = new DynamoRepository();
    const response = await repo.createRedeem(data);
    expect(response).toMatchObject(data);
  });

  it('should return Null if exist some problem with the DynamoDb', async () => {
    const repo = new DynamoRepositoryError();
    const infoFromDb = await repo.createRedeem(data);
    expect(infoFromDb).toBeNull();
  });
});
