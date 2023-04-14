import { RedeemEntity } from "../../domain/redeem.entity";
import { RedeemRepository } from "../../domain/redeem.repository";


const MOCK_SCORE = {
    id:'cualquierUUID',
    documentCc: 4541,
    name: "cualquier nombre",
    points: 23,
    detail: "reclamé el premio X",
  };

export class MockRepository implements RedeemRepository {
 
  async createRedeem(scoreIn: RedeemEntity): Promise<any> {
    const res = MOCK_SCORE
    return res;
  }

}
