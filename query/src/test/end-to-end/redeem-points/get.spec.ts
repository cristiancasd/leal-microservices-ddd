import { app } from '../../../app';

import request from 'supertest';

const data = {
  id: '015dfd5f-7ae7-4837-8f43-58ec19716583',
  documentCc: 1000,
  name: 'User test GET',
  score: 1
};

const url = '/api/query/getbyid/';
const urlAdd = '/api/query/add/';

describe('GET SCORE - GET /api/query/getbyid/', () => {
  it('should respond with a 200 status code ', async () => {
    const scoreAdded = await request(app).put(urlAdd).send(data).expect(200);

    console.log('scoreAdded.body ....', scoreAdded.statusCode, scoreAdded.body);
    const response = await request(app)
      .get(url + data.documentCc)
      .expect(200);

    console.log('response.body ....', response.statusCode, response.body);

    expect(+response.body.score).toEqual(scoreAdded.body.score);
  });

  it('should respond with a 400 status code (documentCc must be number)', async () => {
    const response = await request(app).get(url + '848kmknk4524');
    expect(response.statusCode).toBe(400);
  });

  it('should have errors array with field error, (documentCc must be number)', async () => {
    const response = await request(app).get(url + '848kmknk4524');
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBeDefined();
    expect(response.body.errors[0].field).toBeDefined();
    expect(response.body.errors[0].field).toEqual('documentCc');
  });

  it('should respond with a 404 status code (User dont have data )', async () => {
    const response = await request(app).get(url + '4454878'); //random documentCc number
    expect(response.statusCode).toBe(404);
  });

  it('should respond with a 404 status code (User dont have data )', async () => {
    const response = await request(app).get(url + 87845484); //random UUID
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBeDefined();
  });
});
