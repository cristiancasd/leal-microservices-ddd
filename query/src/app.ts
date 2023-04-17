import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import queryRoute from './query/infrastructure/route/query.route';

import { errorHandler } from './query/infrastructure/middlewares/error-handler';
import { NotFoundError } from './query/domain/errors/not-found-error';

const app = express();
app.use(cors());
app.use(express.json());
app.use(queryRoute);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
