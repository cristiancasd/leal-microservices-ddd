import { BadRequestError } from '../domain/errors/bad-request-error';
import { NotFoundDbError } from '../domain/errors/not-fount-db-error';
import { QueryRepository } from '../domain/query.repository';
import { QueryValue } from '../domain/query.value';

interface scoreInput {
  id: string;
  documentCc: number;
  name: string;
  score: number;
}

export class UpdateUseCase {
  private readonly _queryRepository: QueryRepository;
  constructor(queryRepository: QueryRepository) {
    this._queryRepository = queryRepository;
  }

  public addPoints = async (input: scoreInput) => {
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(
      inputValue.documentCc
    );

    if (query && typeof query !== "string") {
      inputValue.score = +inputValue.score + +query.score;
    }

    const scoreCreated = await this._queryRepository.updatePoints(inputValue);
    return scoreCreated;
  };

  public redeemPoints = async (input: scoreInput) => {
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(
      inputValue.documentCc
    );

    if(typeof query === "string") throw new NotFoundDbError(query);

    if (query && +query.score >= inputValue.score) {
      inputValue.score = +query.score - inputValue.score;
      const scoreCreated = await this._queryRepository.updatePoints(inputValue);
      return scoreCreated;
    } else {
      throw new BadRequestError('sorry, you dont have enough points');
    }
  };
}
