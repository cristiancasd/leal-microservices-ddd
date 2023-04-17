//import mongoose from 'mongoose';
//import dbInit from './add-points/infrastructure/db/aws';
import { app } from './app';
import 'dotenv/config';

const start = async () => {
  console.log('Starting 1');
  /*if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL must be defined');
  }*/

  try {
    //dbInit()//.then();

    //await mongoose.connect(process.env.MONGO_URL,{});
    console.log('Connected to DB');
  } catch (err) {
    console.error(err);
    console.log('error to conect with dynamo');
  }

  app.listen(8060, () => {
    console.log('node_env ', process.env.NODE_ENV);
    console.log('Listening on port 8060!!');
  });
};

start();
