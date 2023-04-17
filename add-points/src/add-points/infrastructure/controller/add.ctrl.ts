import axios from 'axios';
import { Request, Response } from 'express';
import { AddUseCase } from '../../application/addUseCase';
import { EventBusValue } from '../../domain/event-bus/event-bus.value';
import { QueryValue } from '../../domain/query/query.value';

export class AddController {
  constructor(private addUseCase: AddUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const pointsAdded = await this.addUseCase.createAdd(body);
    res.status(201).send(pointsAdded);

    if (pointsAdded) {
      const data = new QueryValue(pointsAdded);
      const dataEventBus = new EventBusValue({ data, type: 'PointsAdded' });

      try {
        //await axios.put( process.env.API_URL_QUERY_ADD || '', data);   //Post directly QUERY service
        await axios.post(
          process.env.API_URL_SRV_EVENT || 'http://localhost:8070/events',
          dataEventBus
        ); // post using Event BUS
      } catch (err) {
        console.log(
          'err with axios QUERY backend (adding new Points)' /*,err*/
        );
      }
    }
  }
}
