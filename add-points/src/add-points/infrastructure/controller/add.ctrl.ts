import axios from 'axios';
import { NextFunction, Request, Response } from 'express';
import { AddUseCase } from '../../application/addUseCase';

export class AddController {
  constructor(private addUseCase: AddUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const pointsAdded = await this.addUseCase.createAdd(body);

    //console.log('axios message :')

    /*try{
      const response= await axios.post("http://event-bus-srv:4005/events", {
        type: "PostCreated",
        data: pointsAdded
      
      });
      console.log('response axios ', response)
    }catch(err){
      console.log('err with axios', err);
    }*/

    res.status(201).send(pointsAdded);
  }
}
