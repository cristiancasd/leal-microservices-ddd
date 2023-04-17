import { QueryEntity } from '../query/query.entity';
import { EventBusEntity } from './event-bus.entity';

export class EventBusValue implements EventBusEntity {
  data: QueryEntity;
  type: string;

  constructor({ data, type }: { data: QueryEntity; type: string }) {
    this.data = data;
    this.type = type;
  }
}
