import { app } from '../../../app';

import request from 'supertest';

const data = {
  documentCc: 455554,
  name: 'katiusca',
  points: 54,
  detail: 'fsdf',
  idUser: 'a9e2c4a3-403b-42a1-a716-af09c3cf1e70' // random User to test
};

const dataErr = {
  d: 455554, //body must have "documentCc"
  n: 'katiusca', //body must have "name"
  points: '55lf4', //points must be number
  de: 'fsdf', //body must have "detail"
  idUser: 455455 // idUser, must be UUID
};

describe('CREATE ADD-POINTS - POST /add/create', () => {
  it('should respond with a 201 status code', async () => {
    const response = await request(app).post('/api/add/create').send(data);
    expect(response.statusCode).toBe(201);
  });

  it('should respond with a 200 status code', async () => {
    const response = await request(app).post('/api/add/create').send(data);
    expect(response.body).toBeInstanceOf(Object);
  });

  it('bada data- should respond with a 400 status code', async () => {
    const response = await request(app).post('/api/add/create').send(dataErr);
    expect(response.statusCode).toBe(400);
  });

  it('bada data- should respond with a 400 status code', async () => {
    const response = await request(app).post('/api/add/create').send(dataErr);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(5);
  });
});
