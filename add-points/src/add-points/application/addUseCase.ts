import { AddRepository } from '../domain/addPoints/add.repository';
import { AddValue } from '../domain/addPoints/add.value';
import { DataBaseError } from '../domain/errors/database-error';

interface addInput {
  documentCc: number;
  name: string;
  points: number;
  detail: string;
  idUser: string;
}

export class AddUseCase {
  constructor(private readonly _addRepository: AddRepository) {}
  public createAdd = async (input: addInput) => {
    const addValue = new AddValue(input);
    try {
      const addCreated = await this._addRepository.createAdd(addValue);
      return addCreated;
    } catch (err) {
      throw new DataBaseError();
    }
  };
}
