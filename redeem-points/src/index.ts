import { app } from './app';
import { connectProducer } from './redeem-points/infrastructure/broker/kafka';



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

  app.listen(8062, () => {
    console.log('Listening on port 8062 !!!');
  });
};

start();
