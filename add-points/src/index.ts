import 'dotenv/config';

import { app } from './app';

const start = async () => {
  app.listen(8060, () => {
    console.log('Listening on port 8060!!');
  });
};

start();
