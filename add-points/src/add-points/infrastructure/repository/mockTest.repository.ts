
import { AddEntity } from "../../domain/add.entity";
import { AddRepository } from "../../domain/add.repository";




export class MockTestRepository implements AddRepository {
 
  async createAdd(scoreIn: AddEntity): Promise<any> {
    const res = scoreIn
    return res;
  }

}
