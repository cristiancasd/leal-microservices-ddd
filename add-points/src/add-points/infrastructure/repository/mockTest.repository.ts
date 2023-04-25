import { AddEntity } from '../../domain/addPoints/add.entity';
import { AddRepository } from '../../domain/addPoints/add.repository';

export class MockTestRepository implements AddRepository {
  async createAdd(scoreIn: AddEntity): Promise<AddEntity> {
    const res = scoreIn;
    return res;
  }
}
