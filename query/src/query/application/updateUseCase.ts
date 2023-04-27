import { BadRequestError } from '../domain/errors/bad-request-error';
import { DataBaseError } from '../domain/errors/database-error';
import { NotFoundDbError } from '../domain/errors/not-fount-db-error';
import { QueryRepository } from '../domain/query.repository';

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
    const query = await this._queryRepository.getScoreById(input.documentCc);
    if (!query) throw new DataBaseError();

    if (typeof query !== 'string') {
      input.score = +input.score + +query.score;
    }

    const scoreCreated = await this._queryRepository.updatePoints(input);
    if (!scoreCreated) throw new DataBaseError();
    return scoreCreated;
  };

  public redeemPoints = async (input: scoreInput) => {
    const query = await this._queryRepository.getScoreById(input.documentCc);

    if (!query) throw new DataBaseError();
    if (typeof query === 'string') throw new NotFoundDbError(query);

    if (+query.score >= +input.score) {
      input.score = +query.score - +input.score;
      const scoreCreated = await this._queryRepository.updatePoints(input);
      if (!scoreCreated) throw new DataBaseError();

      return scoreCreated;
    } else {
      throw new BadRequestError('sorry, you dont have enough points');
    }
  };
}
