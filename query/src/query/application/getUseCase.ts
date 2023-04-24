import { DataBaseError } from '../domain/errors/database-error';
import { NotFoundDbError } from '../domain/errors/not-fount-db-error';
import { QueryRepository } from '../domain/query.repository';

export class GetUseCase {
  private readonly _queryRepository: QueryRepository;
  constructor(queryRepository: QueryRepository) {
    this._queryRepository = queryRepository;
  }

  public getScoreById = async (documentCc: number) => {
    const query = await this._queryRepository.getScoreById(documentCc);
    if(!query) throw new DataBaseError()
    if(typeof query === "string") throw new NotFoundDbError(query);
    return query
  };
}
