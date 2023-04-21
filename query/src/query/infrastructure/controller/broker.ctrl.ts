import { UpdateUseCase } from '../../application/updateUseCase';
import { QueryEntity } from '../../../../../redeem-points/src/redeem-points/domain/query/query.entity';

export class QueryFromBrokerController {
  constructor(
    private updateUseCase: UpdateUseCase,
  ) {}

  public addPointsFromBroker = async (data:QueryEntity) => {
    await this.updateUseCase.addPoints(data);
  };

  public redeemPointsFromBroker = async (body:QueryEntity) => {
    await this.updateUseCase.redeemPoints(body);
  };
}
