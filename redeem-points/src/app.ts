import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import { NotFoundError } from './redeem-points/domain/errors/not-found-error';
import { errorHandler } from './redeem-points/infrastructure/middlewares/error-handler';

import redeemRoute from './redeem-points/infrastructure/route/redeem.route';

const app = express();
app.use(cors());
app.use(express.json());
app.use(redeemRoute);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
