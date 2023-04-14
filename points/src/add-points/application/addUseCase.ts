import { AddRepository } from "../domain/add.repository";
import { AddValue } from "../domain/add.value";
import { AddEntity } from '../domain/add.entity';
import {v4 as uuidv4} from 'uuid';

interface addInput {
  documentCc:number
  name: string
  points: number
  detail: string
}

export class AddUseCase {
  private readonly _addRepository: AddRepository
  constructor( addRepository: AddRepository ) {
    this._addRepository = addRepository
    }
  
  public  createAdd = async ({ documentCc , name, points, detail }:{ documentCc: number; points: number, name: string, detail:string}) => {
    
    console.log('estoy en AddUseCase ', { documentCc, name, points, detail })
    
    
    const addValue = new AddValue({ documentCc, name, points, detail });
    
    const add={
      id:uuidv4(), //this._uuidGenerator.generate(),
      name,
      documentCc,
      points,
      detail,
    }

    console.log('ADD this._uuidGenerator.generate() , ', add);

    
    const addCreated = await this._addRepository.createAdd(add);
    console.log('addCreated ',addCreated)
    return addCreated
  }
}
