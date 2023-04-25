import { UpdateUseCase } from '../../application/updateUseCase';
import { QueryEntity } from '../../domain/query.entity';

export class QueryFromBrokerController {
  constructor(private updateUseCase: UpdateUseCase) {}

  public addPointsFromBroker = async (data: QueryEntity) => {
    try {
      await this.updateUseCase.addPoints(data);
    } catch (error: any) {
      //todo: action when is not possible add points
      console.error(error.message);
    }
  };

  public redeemPointsFromBroker = async (body: QueryEntity) => {
    try {
      await this.updateUseCase.redeemPoints(body);
    } catch (error: any) {
      //todo: action when is not possible redeem points
      console.error(error.message);
    }
  };
}
