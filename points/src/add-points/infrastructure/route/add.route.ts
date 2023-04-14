import { Router } from "express";
import { AddUseCase } from "../../application/addUseCase";
import { AddController,  } from "../controller/add.ctrl";
import { DynamoRepository } from "../repository/dynamo.repository";
import { MockRepository } from "../repository/mock.repository";

const route = Router()

const addRepo = new DynamoRepository()
//const addRepo = new MockRepository()


const addUseCase = new AddUseCase(addRepo)

const addCtrl = new AddController(addUseCase)


route.post(`/add/create`, addCtrl.insertCtrl)
route.get("/add", (req, res)=>{
    res.json({"Hi":"Hello World"})
})

//route.get(`/user`, userCtrl.getCtrl)

export default route