import { BadRequestError } from '../domain/errors/bad-request-error';
import { NotFoundError } from '../domain/errors/not-found-error';
import { NotFoundDbError } from '../domain/errors/not-fount-db-error';
import { QueryRepository } from '../domain/query.repository';
import { QueryValue } from '../domain/query.value';

interface scoreInput {
  id: string;
  documentCc: number;
  name: string;
  score: number;
}

export class GetUseCase {
  private readonly _queryRepository: QueryRepository;
  constructor(addRepository: QueryRepository) {
    this._queryRepository = addRepository;
  }

  public getScoreById = async (id: string) => {
    const query = await this._queryRepository.getScoreById(id);
    if (query) return query;
    throw new NotFoundDbError('Dont exist user, try with other ID');
  };
}
