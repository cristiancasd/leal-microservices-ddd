import { RedeemValue } from '../../../../redeem-points/domain/redeem/redeem.value';

const data = {
  documentCc: 455554,
  name: 'redeemUseCase',
  points: 54,
  detail: 'puntos por comprar una nevera',
  idUser: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

describe('UNIT value redeemValue  ', () => {
  it("should return a object redeeming 'id' to data Value ", async () => {
    const redeemValue = new RedeemValue(data);
    expect(redeemValue.id).toBeDefined();
    expect(redeemValue).toMatchObject({ ...data, id: redeemValue.id });
  });
});
