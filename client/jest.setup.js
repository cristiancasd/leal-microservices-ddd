// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
//import 'setimmediate';

/*
require('dotenv').config({
    path: '.env'
});*/

require('dotenv').config();

jest.mock('./src/helpers/getEnvVariables', () => ({
  getEnvVariables: () => ({ ...process.env }),
}));

jest.setTimeout(30000);
