import { QueryRepository } from "../domain/query.repository";
import { QueryValue } from "../domain/query.value";

interface scoreInput {
  id:string
  documentCc:number
  name: string
  score: number
}

export class UpdateUseCase {
  private readonly _queryRepository: QueryRepository
  constructor(queryRepository: QueryRepository){
    this._queryRepository = queryRepository
  }
  
  public  updatePoints = async (input:scoreInput) => {    
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(inputValue.id)
    if(query){
      inputValue.score=+inputValue.score+ +query.score
    };

    const scoreCreated = await this._queryRepository.updatePoints(inputValue);
    return scoreCreated
  }

  public  redeemPoints = async (input:scoreInput) => {    
    let inputValue = new QueryValue(input);
    const query = await this._queryRepository.getScoreById(inputValue.id)
    
    if(query && +query.score>= inputValue.score){
      inputValue.score= +query.score -inputValue.score
      const scoreCreated = await this._queryRepository.updatePoints(inputValue);
      return scoreCreated
      }else{
        return null
      }
  }
}
