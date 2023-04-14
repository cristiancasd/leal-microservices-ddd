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


  public  getScoreById = async (documentCc:string) => {
    console.log('estoy en query use case ', documentCc)
    const query = await this._queryRepository.getScoreById(documentCc)
    return query
  }
}
