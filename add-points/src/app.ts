

import "dotenv/config";
import 'express-async-errors';
import express from "express";
import cors from "express";
import { NotFoundError } from "./add-points/domain/errors/not-found-error";
import { errorHandler } from "./add-points/infrastructure/middlewares/error-handler";
import addRoute from "./add-points/infrastructure/route/add.route";


const app = express();
app.use(cors()); 
app.use(express.json()); 

app.use(addRoute);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export {app}


