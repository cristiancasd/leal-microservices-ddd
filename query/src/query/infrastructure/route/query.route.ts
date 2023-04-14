import { Router } from "express";
import { DynamoRepository } from "../repository/dynamo.repository";
import { MockRepository } from "../repository/mock.repository";
import { AddUseCase } from '../../application/addUseCase';
import { QueryController } from "../controller/query.ctrl";
import { GetUseCase } from "../../application/getUseCase";

const route = Router()

const addRepo = new DynamoRepository()
//const addRepo = new MockRepository()


const addUseCase = new AddUseCase(addRepo)
//const redemUseCase = new AddUseCase(addRepo)

const getUseCase = new GetUseCase(addRepo)


const addCtrl = new QueryController(addUseCase,getUseCase)


route.put(`/query/create`, addCtrl.addPoints)
route.put(`/query/redeem`, addCtrl.redeemPoints)

route.get(`/query/getbyid/:documentCc`, addCtrl.getScoreById)



route.get("/add", (req, res)=>{
    res.json({"Hi":"Hello World"})
})

//route.get(`/user`, userCtrl.getCtrl)

export default route