import { QueryEntity } from "./query.entity";

export interface QueryRepository {
  //findScoretById(id: string): Promise<AddEntity | null>;
  addPoints(query:QueryEntity): Promise<QueryEntity | null>;
  //redeemPoints(query:QueryEntity): Promise<QueryEntity | null>;
  getScoreById(documentCc:string): Promise<QueryEntity | null>;
  //updateScoreById(score:AddEntity): Promise<AddEntity | null>;
}
 