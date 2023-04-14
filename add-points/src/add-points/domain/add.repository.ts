import { AddEntity } from "./add.entity";

export interface AddRepository {
  createAdd(add:AddEntity): Promise<AddEntity | null>;
}
 