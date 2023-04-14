

import "dotenv/config";
import express from "express";
import cors from "express";
import addRoute from "./add-points/infrastructure/route/add.route";

const app = express();
app.use(cors()); 
app.use(express.json()); 
app.use(addRoute);



/*import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { currentUserRouter } from './routes/current-user';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { errorHandler, NotFoundError } from '@casd-ticketing/common';
//import { errorHandler, NotFoundError } from '@casd-ticketing/common';

//import { errorHandler } from './middlewares/error-handler';
//import { NotFoundError } from './errors/not-found-error';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use( 
  cookieSession({
    signed: false,
    //secure: process.env.NODE_ENV !== 'test'
    secure: false
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);
*/
export {app}


