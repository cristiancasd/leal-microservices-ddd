import { NextFunction, Request, Response } from 'express';
import { RedeemUseCase } from '../../application/redeemUseCase';

export class RedeemController {
  constructor(private redeemUseCase: RedeemUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this);
  }
  public async insertCtrl({ body }: Request, res: Response) {
    const redeemAdded = await this.redeemUseCase.createRedeem(body);
    res.status(201).send(redeemAdded);
  }
}
