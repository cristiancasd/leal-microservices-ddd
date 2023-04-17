import { app } from './app';

const start = async () => {
  app.listen(8062, () => {
    console.log('Listening on port 8062 !!!');
  });
};

start();
