import { RedeemEntity } from '../../domain/redeem/redeem.entity';
import { RedeemRepository } from '../../domain/redeem/redeem.repository';

export class MockTestRepository implements RedeemRepository {
  async createRedeem(scoreIn: RedeemEntity): Promise<any> {
    const res = scoreIn;
    return res;
  }
}
