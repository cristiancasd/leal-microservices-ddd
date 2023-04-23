import { Request, Response } from 'express';
import { RedeemUseCase } from '../../application/redeemUseCase';
import { QueryValue } from '../../domain/query/query.value';
import { RedeemBrokerUserCase } from '../../application/redeemBrokerUseCase';

export class RedeemController {
  constructor(
    private redeemUseCase: RedeemUseCase,
    private redeemBrokerUserCase: RedeemBrokerUserCase
  ) {}

  public insertCtrl = async ({ body }: Request, res: Response) => {
    const pointsRedeemed = await this.redeemUseCase.createRedeem(body);

    res.status(201).send(pointsRedeemed);

    if (pointsRedeemed) {
      const redeemPointsQuery = new QueryValue(pointsRedeemed);
      const brokerMessage = await this.redeemBrokerUserCase.sendMessageBroker(
        redeemPointsQuery
      );
      console.log('mensage enviado usando el broker ', brokerMessage);
    }
  };
}
