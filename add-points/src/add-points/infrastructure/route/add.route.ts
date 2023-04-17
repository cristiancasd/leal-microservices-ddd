import express, { Request, Response } from 'express';

import { AddUseCase } from '../../application/addUseCase';
import { AddController } from '../controller/add.ctrl';
import { validateRequest } from '../middlewares/validate-request';
import { DynamoRepository } from '../repository/dynamo.repository';
import { MockRepository } from '../repository/mock.repository';
import { body } from 'express-validator';

const route = express.Router();

//const addRepo = new MockRepository()   // To use db Mock
const addRepo = new DynamoRepository(); // To use db Dynamo

const addUseCase = new AddUseCase(addRepo);
const addCtrl = new AddController(addUseCase);

route.post(
  `/api/add/create`,
  [
    body('documentCc').isNumeric().withMessage('documentCc must be number'),
    body('name').isString().withMessage('name must be String'),
    body('points').isNumeric().withMessage('points must be number'),
    body('detail').isString().withMessage('detail must be String'),
    body('idUser').isUUID().withMessage('idUser must be UUID')
  ],
  validateRequest,
  addCtrl.insertCtrl
);

route.post('/events', (req, res) => {
  console.log('Recived Event', req.body.type);
  res.send({});
});

export default route;
