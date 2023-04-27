import { QueryEntity } from '../query/query.entity';

export interface BrokerEntity {
  topic: string;
  message: QueryEntity;
}
