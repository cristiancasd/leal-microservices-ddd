import { QueryEntity } from './query.entity';

export class QueryValue implements QueryEntity {
  id: string;
  documentCc: number;
  name: string;
  score: number;

  constructor({
    id,
    documentCc,
    score,
    name
  }: {
    id: string;
    documentCc: number;
    score: number;
    name: string;
  }) {
    this.id = id;
    this.documentCc = documentCc;
    this.name = name;
    this.score = score;
  }
}
