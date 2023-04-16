import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { AddUseCase } from '../../application/addUseCase';
import { QueryValue } from '../../domain/query.value';

export class AddController {
  constructor(private addUseCase: AddUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const pointsAdded = await this.addUseCase.createAdd(body);
    res.status(201).send(pointsAdded);

    if (pointsAdded) {
      const data = new QueryValue(pointsAdded);
      try {
        await axios.put(
          /*"http://event-bus-srv:4005/events"*/ process.env
            .API_URL_QUERY_ADD || '',
          data
        );
      } catch (err) {
        console.log('err with axios QUERY backend (adding new Points)', err);
      }
    }
  }
}
