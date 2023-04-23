import { QueryEntity } from './query.entity';

export interface QueryRepository {
  updatePoints(query: QueryEntity): Promise<QueryEntity>;
  getScoreById(documentCc: number): Promise<QueryEntity | null>;
}
