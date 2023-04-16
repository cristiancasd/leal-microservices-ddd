import { QueryEntity } from './query.entity';

export class QueryValue implements QueryEntity {
  id: string;
  documentCc: number;
  name: string;
  score: number;

  constructor({
    documentCc,
    points,
    name,
    idUser
  }: {
    documentCc: number;
    points: number;
    name: string;
    idUser: string;
  }) {
    this.documentCc = documentCc;
    this.name = name;
    this.score = points;
    this.id = idUser;
  }
}
