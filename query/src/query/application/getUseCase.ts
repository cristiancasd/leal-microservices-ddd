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
  constructor(queryRepository: QueryRepository) {
    this._queryRepository = queryRepository;
  }

  public getScoreById = async (documentCc: number) => {
    const query = await this._queryRepository.getScoreById(documentCc);
    if (query) return query;
    throw new NotFoundDbError('Dont exist user, try with other ID');
  };
}
