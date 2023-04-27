import { QueryEntity } from './query.entity';

export interface QueryRepository {
  updatePoints(query: QueryEntity): Promise<QueryEntity | null>;
  getScoreById(documentCc: number): Promise<QueryEntity | null | string>;
}
