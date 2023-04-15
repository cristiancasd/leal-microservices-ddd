import { v4 as uuid } from 'uuid';
import { AddEntity } from './add.entity';

export class AddValue implements AddEntity {
  id: string;
  documentCc: number;
  name: string;
  points: number;
  detail: string;
  idUser: string;


  constructor({
    documentCc,
    points,
    name,
    detail,
    idUser
  }: {
    documentCc: number;
    points: number;
    name: string;
    detail: string;
    idUser: string;
  }) {
    this.id = uuid();
    this.documentCc = documentCc;
    this.name = name;
    this.points = points;
    this.detail = detail;
    this.idUser = idUser;

  }
}
