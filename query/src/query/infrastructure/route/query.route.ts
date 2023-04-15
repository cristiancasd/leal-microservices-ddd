import { Router } from 'express';
import { DynamoRepository } from '../repository/dynamo.repository';
import { MockRepository } from '../repository/mock.repository';
import { QueryController } from '../controller/query.ctrl';
import { GetUseCase } from '../../application/getUseCase';
import { UpdateUseCase } from '../../application/updateUseCase';
import { body, check } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

const route = Router();

const redeemRepo = new DynamoRepository(); //to use db dynamoDB
//const redeemRepo = new MockRepository(); //to use mock dynamoDB

const updateUseCase = new UpdateUseCase(redeemRepo);
const getUseCase = new GetUseCase(redeemRepo);

const addCtrl = new QueryController(updateUseCase, getUseCase);

route.put(
  `/api/query/add`,
  [
    body('id').isUUID().withMessage('id must be UUID'),
    body('documentCc').isNumeric().withMessage('documentCc must be number'),
    body('name').isString().withMessage('name must be String'),
    body('score').isNumeric().withMessage('score must be number')
  ],
  validateRequest,
  addCtrl.addPoints
);

route.put(
  `/api/query/redeem`,
  [
    body('id').isUUID().withMessage('id must be UUID'),
    body('documentCc').isNumeric().withMessage('documentCc must be number'),
    body('name').isString().withMessage('name must be String'),
    body('score').isNumeric().withMessage('score must be number')
  ],
  validateRequest,
  addCtrl.redeemPoints
);

route.get(
  `/api/query/getbyid/:documentCc`,
  [
    check('documentCc', 'documentCc must be number').isNumeric()
    //check('id', 'id must be UUID').isUUID()
  ],
  validateRequest,
  addCtrl.getScoreById
);

export default route;
