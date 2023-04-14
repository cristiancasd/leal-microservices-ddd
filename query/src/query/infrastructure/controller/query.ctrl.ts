import {  Request, Response } from "express";
import { GetUseCase } from "../../application/getUseCase";
import { UpdateUseCase } from "../../application/updateUseCase";

export class QueryController {
  constructor(
    private updateUseCase: UpdateUseCase,
    private getUseCase: GetUseCase,
    ) {
    this.addPoints = this.addPoints.bind(this)
    this.redeemPoints = this.redeemPoints.bind(this)
    this.getScoreById = this.getScoreById.bind(this)
  }

  public async addPoints({ body }: Request, res: Response) {
    const point = await this.updateUseCase.updatePoints(body);
    res.send(point);
  }

  public async redeemPoints({ body }: Request, res: Response) {
    const point = await this.updateUseCase.redeemPoints(body);
    res.send(point);
  }
  
  public async getScoreById(req: Request, res: Response) {
    let id = req.params.id
    const score = await this.getUseCase.getScoreById(id);
    res.send( score );
  }
}


