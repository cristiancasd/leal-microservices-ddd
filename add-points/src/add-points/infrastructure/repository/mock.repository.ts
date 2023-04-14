
import { AddEntity } from "../../domain/add.entity";
import { AddRepository } from "../../domain/add.repository";


const MOCK_SCORE = {
    id:'cualquierUUID',
    documentCc: 4541,
    name: "cualquier nombre",
    points: 23,
    detail: "información de valor de los puntos",
  };

export class MockRepository implements AddRepository {
 
  async createAdd(scoreIn: AddEntity): Promise<any> {
    const user = MOCK_SCORE
    return user;
  }

}
