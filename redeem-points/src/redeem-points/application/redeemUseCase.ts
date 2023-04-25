import { DataBaseError } from '../domain/errors/database-error';
import { RedeemRepository } from '../domain/redeem/redeem.repository';
import { RedeemValue } from '../domain/redeem/redeem.value';

interface redeemInput {
  documentCc: number;
  name: string;
  points: number;
  detail: string;
  idUser: string;
}

export class RedeemUseCase {
  constructor(private readonly _redeemRepository: RedeemRepository) {}
  public createRedeem = async (input: redeemInput) => {
    const redeemValue = new RedeemValue(input);
    const redeemCreated = await this._redeemRepository.createRedeem(
      redeemValue
    );
    if (redeemCreated) return redeemCreated;
    throw new DataBaseError();
  };
}
