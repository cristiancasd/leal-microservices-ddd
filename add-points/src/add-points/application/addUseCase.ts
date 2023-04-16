import { AddRepository } from '../domain/add.repository';
import { AddValue } from '../domain/add.value';
import { DataBaseError } from '../domain/errors/database-error';

interface addInput {
  documentCc: number;
  name: string;
  points: number;
  detail: string;
  idUser: string;
}

export class AddUseCase {
  private readonly _addRepository: AddRepository;
  constructor(addRepository: AddRepository) {
    this._addRepository = addRepository;
  }

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
