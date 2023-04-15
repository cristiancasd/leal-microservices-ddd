import { QueryEntity } from './query.entity';

export interface QueryRepository {
  updatePoints(query: QueryEntity): Promise<QueryEntity | null>;
  getScoreById(id: string): Promise<QueryEntity | null>;
}
