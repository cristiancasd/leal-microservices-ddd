import { Router } from 'express';
import { body } from 'express-validator';
import { RedeemBrokerUserCase } from '../../application/redeemBrokerUseCase';

import { RedeemUseCase } from '../../application/redeemUseCase';
import { validateRequest } from '../middlewares/validate-request';
import { DynamoRepository } from '../repository/dynamo.repository';
import { KafkaRespository } from '../repository/kafka.repository';
import { MockRepository } from '../repository/mockDb.repository';
import { RedeemController } from '../controller/redeem.ctrl';

const route = Router();

//const addRepo = new MockRepository()      //To use db mock
const redeemRepo = new DynamoRepository(); //To use db dynamo

const addBroker = new KafkaRespository(); // To use Kafka as broker

const redeemUseCase = new RedeemUseCase(redeemRepo);
const redeemBrokerUseCase = new RedeemBrokerUserCase(addBroker);

const redeemCtrl = new RedeemController(redeemUseCase, redeemBrokerUseCase);

route.post(
  `/api/redeem/create`,
  [
    body('documentCc').isNumeric().withMessage('documentCc must be number'),
    body('name').isString().withMessage('name must be String'),
    body('points').isNumeric().withMessage('points must be number'),
    body('detail').isString().withMessage('detail must be String'),
    body('idUser').isUUID().withMessage('idUser must be UUID')
  ],
  validateRequest,
  redeemCtrl.insertCtrl
);

export default route;
