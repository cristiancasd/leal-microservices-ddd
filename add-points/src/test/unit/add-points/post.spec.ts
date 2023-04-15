import { AddUseCase } from '../../../add-points/application/addUseCase';
import { MockRepository } from '../../../add-points/infrastructure/repository/mock.repository';
import { MockTestRepository } from '../../../add-points/infrastructure/repository/mockTest.repository';

const data = {
  documentCc: 455554,
  name: 'katiusca',
  points: 54,
  detail: 'fsdf',
  idUser: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

describe('UNIT addUseCase -> Post ', () => {
  it('should create a new', async () => {
    const addRepo = new MockTestRepository(); // To use db Mock
    const addUseCase = new AddUseCase(addRepo);
    const res = await addUseCase.createAdd(data);
    expect(res?.id).toBe;
    expect(res?.documentCc).toEqual(data.documentCc);
    expect(res?.points).toEqual(data.points);
    expect(res?.detail).toEqual(data.detail);
    expect(res?.idUser).toEqual(data.idUser);
  });
});
