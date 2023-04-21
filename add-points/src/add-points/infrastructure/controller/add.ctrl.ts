import { Request, Response } from 'express';
import { AddBrokerUserCase } from '../../application/addBrokerUseCase';
import { AddUseCase } from '../../application/addUseCase';
import { QueryValue } from '../../domain/query/query.value';

export class AddController {
  constructor( 
    private addUseCase: AddUseCase, 
    private addBrokerUserCase: AddBrokerUserCase ) {}

  public insertCtrl= async ({ body }: Request, res: Response) =>{
    const pointsAdded = await this.addUseCase.createAdd(body);
    
    if (pointsAdded){
      const addPointsQuery = new QueryValue(pointsAdded);
      const algo = await this.addBrokerUserCase.sendMessageBroker(addPointsQuery); 
      console.log('mensage enviado usando el broker ', algo)
    } 

    res.status(201).send(pointsAdded);
  }
}
