import { RedeemEntity } from '../../domain/redeem/redeem.entity';
import { RedeemRepository } from '../../domain/redeem/redeem.repository';

const MOCK_SCORE = {
  id: 'cualquierUUID',
  documentCc: 4541,
  name: 'cualquier nombre',
  points: 23,
  detail: 'reclamé el premio X',
  idUser: 'cualquierUUID -user'
};

export class MockRepository implements RedeemRepository {
  async createRedeem(scoreIn: RedeemEntity): Promise<any> {
    const res = MOCK_SCORE;
    return res;
  }
}
