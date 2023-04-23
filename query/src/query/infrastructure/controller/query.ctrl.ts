import { Request, Response } from 'express';
import { GetUseCase } from '../../application/getUseCase';
//import { UpdateUseCase } from '../../application/updateUseCase';

export class QueryController {
  constructor(
    //private updateUseCase: UpdateUseCase,
    private getUseCase: GetUseCase
  ) {}

  /*public addPoints = async ({ body }: Request, res: Response) => {
    const point = await this.updateUseCase.addPoints(body);
    res.send(point);
  };

  public redeemPoints = async ({ body }: Request, res: Response) => {
    const point = await this.updateUseCase.redeemPoints(body);
    res.send(point);
  };*/

  public getScoreById = async (req: Request, res: Response) => {
    let documentCc = req.params.documentCc;
    const score = await this.getUseCase.getScoreById(+documentCc);
    res.send(score);
  };

  /*  public updateEventBusPoints = async ({ body }: Request, res: Response) => {
    const point =
      body.type && body.type === 'PointsAdded'
        ? await this.updateUseCase.addPoints(body.data)
        : await this.updateUseCase.redeemPoints(body.data);
    res.send(point);
  };*/
}
