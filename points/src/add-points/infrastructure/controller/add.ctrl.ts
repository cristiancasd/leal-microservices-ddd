import { NextFunction, Request, Response } from "express";
import { AddUseCase } from '../../application/addUseCase';
import { DynamoRepository } from "../repository/dynamo.repository";

export class AddController {
  constructor(private addUseCase: AddUseCase) {
    this.insertCtrl = this.insertCtrl.bind(this)
  }

  public async insertCtrl({ body }: Request, res: Response) {
    console.log('999999999999999999999999 ', body)
    const point = await this.addUseCase.createAdd(body);
    res.send({ point });
  }
}


