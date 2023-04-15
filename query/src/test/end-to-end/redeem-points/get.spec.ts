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
    const scoreAdded = await request(app).put(urlAdd).send(data);
    const response = await request(app).get(url + data.id);
    expect(response.statusCode).toBe(200);
    expect(+response.body.score).toEqual(scoreAdded.body.score);
  });

  it('should respond with a 400 status code (ID must be UUID)', async () => {
    const response = await request(app).get(url + 'cualquiter');
    expect(response.statusCode).toBe(400);
  });

  it('should respond with a 400 status code (ID must be UUID)', async () => {
    const response = await request(app).get(url + 'cualquiter');
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBeDefined();
    expect(response.body.errors[0].field).toBeDefined();
    expect(response.body.errors[0].field).toEqual('id');
  });

  it('should respond with a 404 status code (UUID don exist )', async () => {
    const response = await request(app).get(
      url + '58505d82-cf63-4e29-871c-1b0b77b3b0b9'
    ); //random UUID
    expect(response.statusCode).toBe(404);
  });

  it('should respond with a 404 status code (UUID don exist )', async () => {
    const response = await request(app).get(
      url + '58505d82-cf63-4e29-871c-1b0b77b3b0b9'
    ); //random UUID
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors[0].message).toBeDefined();
  });

  /*it('bada data- should have array with 4 errors descriptions', async () => {
    const response = await request(app)
      .post(url)
      .send(dataErr);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(4);
    console.log(response.body.errors);
  });*/
});
/*
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

  it('bada data- should respond with a 400 status code', async () => {
    const response = await request(app)
      .post('/api/redeem/create')
      .send(dataErr);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(4);
  });
});*/
