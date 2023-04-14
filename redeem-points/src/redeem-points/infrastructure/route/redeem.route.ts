import { Router } from "express";
import { body } from 'express-validator';

import { RedeemUseCase } from "../../application/redeemUseCase";
import { RedeemController } from "../controller/redeem.ctrl";
import { validateRequest } from "../middlewares/validate-request";
import { DynamoRepository } from "../repository/dynamo.repository";
import { MockRepository } from "../repository/mock.repository";

const route = Router()

const redeemRepo = new DynamoRepository()   //To use db dynamo
//const addRepo = new MockRepository()      //To use db mock

const redeemUseCase = new RedeemUseCase(redeemRepo)
const redeemCtrl = new RedeemController(redeemUseCase)

route.post(`/redeem/create`,
 [
    //body('id').isUUID().withMessage('id must be UUID'),
    body('documentCc').isNumeric().withMessage('documentCc must be number'),
    body('name').isString().withMessage('name must be String'),
    body('points').isNumeric().withMessage('points must be number'),
    body('detail').isString().withMessage('detail must be String'),
  ],
  validateRequest,
   redeemCtrl.insertCtrl)

export default route 