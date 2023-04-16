import { BadRequestError } from '../domain/errors/bad-request-error';
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
    console.log('estoy en add ', input);
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(
      inputValue.documentCc
    );
    if (query) {
      inputValue.score = +inputValue.score + +query.score;
    }

    const scoreCreated = await this._queryRepository.updatePoints(inputValue);
    return scoreCreated;
  };

  public redeemPoints = async (input: scoreInput) => {
    console.log('on redeemPoints ', input);
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(
      inputValue.documentCc
    );
    console.log('+query.score', query?.score);

    if (query && +query.score >= inputValue.score) {
      inputValue.score = +query.score - inputValue.score;
      const scoreCreated = await this._queryRepository.updatePoints(inputValue);
      console.log('*****scoreCreated ****', scoreCreated);
      return scoreCreated;
    } else {
      console.log('sorry, you dont have enough points');
      throw new BadRequestError('sorry, you dont have enough points');
    }
  };
}
