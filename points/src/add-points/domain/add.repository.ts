import { AddEntity } from "./add.entity";

export interface AddRepository {
  //findScoretById(id: string): Promise<AddEntity | null>;
  createAdd(add:AddEntity): Promise<AddEntity | null>;
  //updateScoreById(score:AddEntity): Promise<AddEntity | null>;
}
 