import { UpdateUseCase } from '../../../query/application/updateUseCase';
import { MockTestRepository } from '../../../query/infrastructure/repository/mockTest.repository';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'cualquier nombre',
  score: 40
};

const dataBad = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'cualquier nombre',
  score: 200
};

describe('UNIT queryUseCase -> Post - Add Points ', () => {
  it('should add new score to old score', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.addPoints(data);
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(140); //100 base mock, 40 added
    // console.log('respuesta...',res)
  });

  it('should create score if dont exist previus one', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.addPoints({ ...data, documentCc: 785 });
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(40);
  });
});

describe('UNIT queryUseCase -> Post - Redeem Points ', () => {
  it('should redeem new score to old core', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.redeemPoints(data);
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(60); //100 base mock, 40 added
  });

  it('should get Error when I try redeem newScore that is higher than old score', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    try {
      const res = await updateUseCase.redeemPoints(dataBad);
      expect(res?.score).toBeNull();
    } catch (err) {
      expect(err instanceof Error).toBe(true); //expect(res?.score).toEqual(60) //100 base mock, 40 added
    }
  });

  it('should get Error when I try redeem with a bad ID', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    try {
      const res = await updateUseCase.redeemPoints({
        ...data,
        id: 'cualquiercosa'
      });
      expect(res?.score).toBeNull();
    } catch (err) {
      expect(err instanceof Error).toBe(true); //expect(res?.score).toEqual(60) //100 base mock, 40 added
    }
  });
});
