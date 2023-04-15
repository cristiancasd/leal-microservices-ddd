import { RedeemEntity } from '../../domain/redeem.entity';
import { RedeemRepository } from '../../domain/redeem.repository';

export class MockTestRepository implements RedeemRepository {
  async createRedeem(scoreIn: RedeemEntity): Promise<any> {
    const res = scoreIn;
    return res;
  }
}
