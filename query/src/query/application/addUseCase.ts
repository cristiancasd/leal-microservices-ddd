import { QueryRepository } from "../domain/query.repository";
import { QueryValue } from "../domain/query.value";

interface scoreInput {
  id:string
  documentCc:number
  name: string
  score: number
}

export class AddUseCase {
  private readonly _queryRepository: QueryRepository
  constructor(addRepository: QueryRepository){
    this._queryRepository = addRepository
  }
  
  public  addPoints = async (input:scoreInput) => {    
    let inputValue = new QueryValue(input);
    console.log('estoy entrando a addPoint ', inputValue)
    const query = await this._queryRepository.getScoreById(inputValue.documentCc.toString())
    console.log('el query encontrado es ...', query)
    if(query){
      inputValue.score=+inputValue.score+ +query.score
      console.log('despues de la suma ',inputValue)

    };

    const scoreCreated = await this._queryRepository.addPoints(inputValue);
    console.log('addCreated ',scoreCreated)
    return scoreCreated
  }

  public  redeemPoints = async (input:scoreInput) => {    
    console.log('redeemPoints input ', input)

    let inputValue = new QueryValue(input);
    console.log('estoy entrando a redeemPoints ', inputValue)
    const query = await this._queryRepository.getScoreById(inputValue.documentCc.toString())
    console.log('el query encontrado redeemPoints es ...', query)
    if(query && +query.score>= inputValue.score){
      inputValue.score= +query.score -inputValue.score
      console.log('despues de la resta ',inputValue)
      const scoreCreated = await this._queryRepository.addPoints(inputValue);
      console.log('addCreated ',scoreCreated)
      return scoreCreated
      }else{
        return null
      }
      
    
  }


  
}
