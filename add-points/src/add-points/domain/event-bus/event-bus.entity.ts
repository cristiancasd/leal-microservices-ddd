import { QueryEntity } from '../query/query.entity';

export interface EventBusEntity {
  data: QueryEntity;
  type: string;
}
