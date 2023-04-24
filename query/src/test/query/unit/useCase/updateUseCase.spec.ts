import { UpdateUseCase } from '../../../../query/application/updateUseCase';
import { BadRequestError } from '../../../../query/domain/errors/bad-request-error';
import { DataBaseError } from '../../../../query/domain/errors/database-error';
import { MockTestRepository } from '../../../../query/infrastructure/repository/mockTest.repository';
import { DynamoRepositoryError } from '../../../setup';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'unit test',
  score: 40
};

describe('UNIT queryUseCase -> addPoints ', () => {
  it('should add new score to old score', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.addPoints(data);
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(140); //100 base mock, 40 added
  });

  it('should create score if dont exist previus one', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.addPoints({
      ...data,
      documentCc: 785,
      score: 40
    });
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(40);
  });
});

describe('UNIT queryUseCase -> redeemPoints ', () => {
  it('should redeem new score to old core', async () => {
    const repo = new MockTestRepository();
    const updateUseCase = new UpdateUseCase(repo);
    const res = await updateUseCase.redeemPoints({ ...data, score: 40 });
    expect(res?.score).toBeDefined();
    expect(res?.score).toEqual(60); //100 base mock, 40 redeem, result=60
  });

  it('should get BadRequestError when I try redeem newScore that is higher than old score', async () => {
    const repo = new MockTestRepository(); // To use db Mock
    const updateUseCase = new UpdateUseCase(repo);
    try {
      const res = await updateUseCase.redeemPoints({ ...data, score: 200 }); //the base score of mock is 100
      expect(res?.score).toBeNull();
    } catch (err) {
      expect(err).toBeInstanceOf(BadRequestError);
    }
  });

  it('should get BadRequestError when I try redeem newScore that is higher than old score', async () => {
    const repo = new DynamoRepositoryError(); //  name table dont exist in DynamoDB
    const updateUseCase = new UpdateUseCase(repo);
    try {
      const res = await updateUseCase.redeemPoints({ ...data, score: 200 }); //the base score of mock is 100
      expect(res?.score).toBeNull();
    } catch (err) {
      expect(err).toBeInstanceOf(DataBaseError);
    }
  });
});
