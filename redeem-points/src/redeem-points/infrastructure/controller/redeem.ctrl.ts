import { Request, Response } from 'express';
import { RedeemUseCase } from '../../application/redeemUseCase';
import { QueryValue } from '../../domain/query/query.value';
import { RedeemBrokerUserCase } from '../../application/redeemBrokerUseCase';


export class RedeemController {
  constructor(
    private redeemUseCase: RedeemUseCase, 
    private redeemBrokerUserCase: RedeemBrokerUserCase ) {}

  public insertCtrl= async ({ body }: Request, res: Response) =>{
    const pointsRedeemed = await this.redeemUseCase.createRedeem(body);
    
    if (pointsRedeemed){
      const redeemPointsQuery = new QueryValue(pointsRedeemed);
      const brokerMessage = await this.redeemBrokerUserCase.sendMessageBroker(redeemPointsQuery); 
      console.log('mensage enviado usando el broker ', brokerMessage)
    } 

    res.status(201).send(pointsRedeemed);
  }
}

/*
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
        // await axios.put(process.env.API_URL_QUERY_REDEEM || '', data); //Post directly QUERY service
        await axios.post(
          process.env.API_URL_SRV_EVENT || 'http://localhost:8070/events',
          dataEventBus
        ); // post using Event BUS
      } catch (err) {
        console.log(
          'err with axios QUERY backend (render new Points)'
        );
        //todo: Logic when you try to redeem and you dont have points enough
      }
    }
    res.status(201).send(redeemAdded);
  }
}*/
