import { RedeemUseCase } from '../../../../redeem-points/application/redeemUseCase';
import { DataBaseError } from '../../../../redeem-points/domain/errors/database-error';
import { MockTestRepository } from '../../../../redeem-points/infrastructure/repository/mockDbTest.repository';
import { DynamoRepositoryError } from '../../../setup';
 
const data = {
  documentCc: 455554,
  name: 'redeemUseCase',
  points: 54,
  detail: 'puntos por comprar una nevera',
  idUser: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

describe('UNIT redeemUseCase - createRedeem ', () => {
  it('should create a new object, redeeming ID (Mock)', async () => {
    const redeemRepo = new MockTestRepository();
    const redeemUseCase = new RedeemUseCase(redeemRepo);
    const res = await redeemUseCase.createRedeem(data);
    expect(res).toMatchObject(data);
  });

  it('should create a new object, redeeming ID (DynamoDB)', async () => {
    const redeemRepo = new MockTestRepository();
    const redeemUseCase = new RedeemUseCase(redeemRepo);
    const res = await redeemUseCase.createRedeem(data);
    expect(res).toMatchObject(data);
  });

  it('should return a DataBaseError if exist a problem with DynamoDB', async () => {
    const redeemRepo = new DynamoRepositoryError(); //The db table name don´t exist in DynamoDB
    const redeemUseCase = new RedeemUseCase(redeemRepo);
    try {
      const res = await redeemUseCase.createRedeem(data);
      expect(res?.documentCc).toEqual('itsToBeShureThatExpectTheErrorCatch');
    } catch (err) {
      expect(err).toBeInstanceOf(DataBaseError);
    }
  });
});
