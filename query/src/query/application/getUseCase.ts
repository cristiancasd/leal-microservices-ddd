import { QueryRepository } from "../domain/query.repository";
import { QueryValue } from "../domain/query.value";

interface scoreInput {
  id:string
  documentCc:number
  name: string
  score: number
}

export class GetUseCase {
  private readonly _queryRepository: QueryRepository
  constructor(addRepository: QueryRepository){
    this._queryRepository = addRepository
  }


  public  getScoreById = async (id:string) => {
    const query = await this._queryRepository.getScoreById(id)
    return query
  }
}
