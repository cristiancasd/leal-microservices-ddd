import { RedeemUseCase } from '../../../redeem-points/application/redeemUseCase';
import { MockTestRepository } from '../../../redeem-points/infrastructure/repository/mockTest.repository';

const data = {
  documentCc: 455554,
  name: 'katherin',
  points: 54,
  detail: 'fsdf',
  idUser: '2f9d4bb5-d064-4221-925b-4365b1123258'
};

describe('UNIT redeemUseCase -> Post ', () => {
  it('should create a new object', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const useCase = new RedeemUseCase(repo);
    const res = await useCase.createRedeem(data);
    expect(res?.id).toBe;
    expect(res?.documentCc).toEqual(data.documentCc);
    expect(res?.points).toEqual(data.points);
    expect(res?.detail).toEqual(data.detail);
    expect(res?.idUser).toEqual(data.idUser);
  });
});
