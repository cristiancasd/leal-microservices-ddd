import { v4 as uuid } from "uuid";
import { RedeemEntity } from "./redeem.entity";

export class RedeemValue implements RedeemEntity {
  id: string;
  documentCc: number;
  name:string;
  points: number;
  detail: string;

  constructor({ documentCc, points, name, detail}: { documentCc: number; points: number, name: string, detail:string}) {
    this.id = uuid();
    this.documentCc = documentCc;
    this.name= name;
    this.points = points;
    this.detail=detail;
  }
}
