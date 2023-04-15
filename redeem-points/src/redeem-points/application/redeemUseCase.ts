import { RedeemRepository } from '../domain/redeem.repository';
import { RedeemValue } from '../domain/redeem.value';

interface addInput {
  documentCc: number;
  name: string;
  points: number;
  detail: string;
  idUser: string;
}

export class RedeemUseCase {
  private readonly _redeemRepository: RedeemRepository;
  constructor(redeemRepository: RedeemRepository) {
    this._redeemRepository = redeemRepository;
  }

  public createRedeem = async (input: addInput) => {
    const reedemValue = new RedeemValue(input);

    const redeemCreated = await this._redeemRepository.createRedeem(
      reedemValue
    );
    return redeemCreated;
  };
}
