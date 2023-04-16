import { RedeemEntity } from './redeem.entity';

export interface RedeemRepository {
  createRedeem(add: RedeemEntity): Promise<RedeemEntity | null>;
}
