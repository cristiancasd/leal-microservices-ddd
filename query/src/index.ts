import { app } from './app';

const start = async () => {
  app.listen(8061, () => {
    console.log('Listening on port 8061!!');
  });
};

start();
