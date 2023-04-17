import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../../domain/errors/custom-error';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('estoy en error handler');
  if (err instanceof CustomError) {
    console.log(err);
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  console.log('algo salio mal');

  res.status(500).send({
    errors: [{ message: 'Something went wrong' }]
  });
};
