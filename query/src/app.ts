

import "dotenv/config";
import 'express-async-errors';

import express from "express";
import cors from "express";
import queryRoute from "./query/infrastructure/route/query.route";

import { NotFoundError } from "./query/domain/errors/not-found-error";
import { errorHandler } from "./query/infrastructure/middlewares/error-handler";

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.use(queryRoute);

app.all('*', async (req, res) => {
  //throw new Error();
  res.status(404).json({
    message:`Page no found`
})
});

app.use(errorHandler);

export {app}


