import { app } from '../../../app';

import request from 'supertest';

const data = {
  documentCc: 455554,
  name: 'katiusca',
  points: 54,
  detail: 'fsdf',
  idUser: '2f9d4bb5-d064-4221-925b-4365b1123258'
};

const dataErr = {
  d: 455554, //body must have "documentCc"
  n: 'katiusca', //body must have "name"
  points: '55lf4', //points must be number
  de: 'fsdf', //body must have "detail",
  idUser: 'aasdasda' //idUser must be UUID
};

describe('CREATE REDEEM-POINTS - POST /redeem/create', () => {
  it('should respond with a 201 status code', async () => {
    const response = await request(app).post('/api/redeem/create').send(data);
    expect(response.statusCode).toBe(201);
  });

  it('should be a object', async () => {
    const response = await request(app).post('/api/redeem/create').send(data);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('bada data- should respond with a 400 status code', async () => {
    const response = await request(app)
      .post('/api/redeem/create')
      .send(dataErr);
    expect(response.statusCode).toBe(400);
  });

  it('bada data- should have 4 errors description', async () => {
    const response = await request(app)
      .post('/api/redeem/create')
      .send(dataErr);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(5);
  });
});
