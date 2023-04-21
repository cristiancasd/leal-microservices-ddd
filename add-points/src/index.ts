import 'dotenv/config';
import { connectProducer } from './add-points/infrastructure/broker/kafka';

import { app } from './app';
  

const start = async () => {

  let wrongConnection = true;
  while (wrongConnection) {
    try {
      await connectProducer();
      wrongConnection = false; 
    } catch (err) {
      console.log('kafka ... error conecting with producer');
      await sleep(3000);
      function sleep(ms:number) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
    } 
  }

  app.listen(8060, () => {
    console.log('Listening on port 8060!!');
  });
};

start();
