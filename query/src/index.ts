import { app } from './app';
import { connectConsumer } from './query/infrastructure/broker/kafka';
import { listenBroker } from './query/infrastructure/broker/routes';

const start = async () => {
  let wrongConnection = true;
  while (wrongConnection) {
    try {
      await connectConsumer();
      console.log('lista la conexion');
      await listenBroker();
      console.log('escuchando broker');

      wrongConnection = false;
    } catch (err) {
      console.log('kafka ... error conecting with consumer');
      await sleep(3000);
      function sleep(ms: number) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      }
    }
  }

  app.listen(8061, () => {
    console.log('Listening on port 8061!');
  });
};

start();
