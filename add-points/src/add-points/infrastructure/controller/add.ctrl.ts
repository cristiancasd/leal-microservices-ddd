import { NextFunction, Request, Response } from "express";
import { AddUseCase } from '../../application/addUseCase';

export class AddController {
  constructor(private addUseCase: AddUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
  }

  public async insertCtrl({ body }: Request, res: Response) {
    const pointsAdded = await this.addUseCase.createAdd(body);
    res.send( pointsAdded);
  }
}


