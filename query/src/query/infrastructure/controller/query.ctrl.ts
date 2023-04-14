import {  Request, Response } from "express";
import { GetUseCase } from "../../application/getUseCase";
import { AddUseCase } from "../../application/addUseCase";

export class QueryController {
  constructor(
    private addUseCase: AddUseCase,
    private getUseCase: GetUseCase,
    //private redeemUseCase: RedeemUseCase,
    ) {
    this.addPoints = this.addPoints.bind(this)
    this.redeemPoints = this.redeemPoints.bind(this)
    this.getScoreById = this.getScoreById.bind(this)
    //this.redeemUseCase = this.redeemUseCase.bind(this)
  }

  public async addPoints({ body }: Request, res: Response) {
    console.log('999999999999999999999999 ', body)
    const point = await this.addUseCase.addPoints(body);
    res.send(point);
  }

  public async redeemPoints({ body }: Request, res: Response) {
    console.log('redeemPoints controller ', body)
    const point = await this.addUseCase.redeemPoints(body);
    res.send(point);
  }
  
  public async getScoreById(req: Request, res: Response) {
    console.log('estoy en el controller req.params' )
    let documentCc = req.params.documentCc
    console.log('estoy en el controller req.params', documentCc )
    const score = await this.getUseCase.getScoreById(documentCc);
    res.send( score );
  }
}


