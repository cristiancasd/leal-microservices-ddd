import { NextFunction, Request, Response } from 'express';
import { RedeemUseCase } from '../../application/redeemUseCase';
import axios from 'axios';
import { QueryValue } from '../../domain/query/query.value';
import { EventBusValue } from '../../domain/event-bus/event-bus.value';

export class RedeemController {
  constructor(private redeemUseCase: RedeemUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
  }
  public async insertCtrl({ body }: Request, res: Response) {
    const redeemAdded = await this.redeemUseCase.createRedeem(body);

    if (redeemAdded) {
      const data = new QueryValue(redeemAdded);
      const dataEventBus = new EventBusValue({ data, type: 'PointsRedeem' });

      try {
        // await axios.put(/*"http://event-bus-srv:4005/events"*/ process.env.API_URL_QUERY_REDEEM || '', data);
        await axios.post('http://localhost:8070/events', dataEventBus); // post using Event BUS
      } catch (err) {
        console.log(
          'err with axios QUERY backend (render new Points)' /*, err*/
        );
        //todo: Logic when you try to redeem and you dont have points enough
      }
    }
    res.status(201).send(redeemAdded);
  }
}
