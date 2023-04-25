import { GetUseCase } from '../../../../query/application/getUseCase';
import { DataBaseError } from '../../../../query/domain/errors/database-error';
import { NotFoundDbError } from '../../../../query/domain/errors/not-fount-db-error';
import { DynamoRepository } from '../../../../query/infrastructure/repository/dynamo.repository';
import { MockTestRepository } from '../../../../query/infrastructure/repository/mockTest.repository';
import { DynamoRepositoryError } from '../../../setup';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541, //the same document Cc of MOCK db
  name: 'cualquier nombre',
  score: 40
};

describe('UNIT queryUseCase MockDB-> getScoreById ', () => {
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
      const res = await getUseCase.getScoreById(784005154); //random documentCc
      expect(res?.documentCc).toEqual('itsToBeShureThatExpectTheErrorCatch');
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundDbError);
    }
  });
});

describe('UNIT queryUseCase DYNAMO-> getScoreById ', () => {
  it('should get current score of Dynamo Db', async () => {
    const repo = new DynamoRepository();
    const getUseCase = new GetUseCase(repo);
    await repo.updatePoints(data);
    const res = await getUseCase.getScoreById(data.documentCc);
    expect(res).toMatchObject(data);
  });

  it('should return a DataBaseError if exist a problem with DynamoDB', async () => {
    const repo = new DynamoRepositoryError(); //The db table name don´t exist in DynamoDB
    const getUseCase = new GetUseCase(repo);
    try {
      const res = await getUseCase.getScoreById(data.documentCc);
      expect(res?.documentCc).toEqual('itsToBeShureThatExpectTheErrorCatch');
    } catch (err) {
      expect(err).toBeInstanceOf(DataBaseError);
    }
  });

  it('should return a NotFoundDbError if Id to search dont exist in DB', async () => {
    const repo = new DynamoRepository();
    const getUseCase = new GetUseCase(repo);
    try {
      const res = await getUseCase.getScoreById(784005154); //random documentCc
      expect(res?.documentCc).toEqual('itsToBeShureThatExpectTheErrorCatch');
    } catch (err) {
      expect(err).toBeInstanceOf(NotFoundDbError);
    }
  });
});
