import { app } from '../../../app';

import request from 'supertest';

const data = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 4541,
  name: 'User test POST',
  score: 1
};

const dataErr = {
  i: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 'dsd',
  n: 'cualquier nombre',
  score: '44e0'
};
const url = '/api/query/add/';
const urlRedeem = '/api/query/redeem/';

describe('Add score - PUT /api/query/add/', () => {
  it('should respond with a 200 status', async () => {
    const response = await request(app).put(url).send(data);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.score).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.documentCc).toBeDefined();
  });

  it('response2 points must be highter than response1 points ', async () => {
    const response1 = await request(app).put(url).send(data);

    const response2 = await request(app).put(url).send(data);
    expect(response1.body.score < response2.body.score).toEqual(true);
  });

  it('bad data- response with a 400 status', async () => {
    const response = await request(app).put(url).send(dataErr);
    expect(response.statusCode).toBe(400);
  });

  it('bad data- should have array with 4 errors descriptions', async () => {
    const response = await request(app).put(url).send(dataErr);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(4);
  });
});

describe('Redeem score - PUT /api/query/redeem/', () => {
  it('new score must be less than old score', async () => {
    const addScore = await request(app).put(url).send(data);
    expect(addScore.statusCode).toBe(200);

    const response = await request(app)
      .put(urlRedeem)
      .send({ ...addScore.body, score: +addScore.body.score / 2 });
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.score).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.documentCc).toBeDefined();
  });

  it('must be Error when I try to redeem, and i dont have the points enough', async () => {
    const addScore = await request(app).put(url).send(data);
    expect(addScore.statusCode).toBe(200);

    const response = await request(app)
      .put(urlRedeem)
      .send({ ...addScore.body, score: +addScore.body.score * 2 });
    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
  });
});
