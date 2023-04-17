import { AddEntity } from '../../domain/addPoints/add.entity';
import { AddRepository } from '../../domain/addPoints/add.repository';

const MOCK_SCORE = {
  id: 'cualquierUUID',
  documentCc: 4541,
  name: 'cualquier nombre',
  points: 23,
  detail: 'información de valor de los puntos',
  idUser: 'cualquierUUID'
};

export class MockRepository implements AddRepository {
  async createAdd(scoreIn: AddEntity): Promise<any> {
    const res = MOCK_SCORE;
    return res;
  }
}
