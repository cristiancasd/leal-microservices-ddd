/**
 * Infra! Mongo 🙌
 */
import { AddEntity } from "../../domain/add.entity";
import { AddRepository } from "../../domain/add.repository";
/**
 * MOCK!
 */

const MOCK_SCORE = {
    id:'sdasdada',
    documentCc: 4541,
    name: "Leifer",
    points: 23,
    detail: "hola",
  };

export class MockRepository implements AddRepository {
 
  async createAdd(scoreIn: AddEntity): Promise<any> {
    const user = MOCK_SCORE
    return user;
  }

}
