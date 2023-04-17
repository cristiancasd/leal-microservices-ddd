import { app } from '../../../app';

import request from 'supertest';

const dataOk = {
  id: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 99999,
  name: 'User test POST',
  score: 1
};

const dataErr = {
  i: 'c13fab4c-93ff-4e6d-b53f-adc8f70be271',
  documentCc: 'dsd',
  n: 'cualquier nombre',
  score: '44e0'
};

const eventOkAdd = {
  type: 'PointsAdded',
  data: dataOk
};

const eventOkRedeem = {
  type: 'PointsRedeemed',
  data: dataOk
};

const eventErrAdd = {
  type: 448,
  data: dataErr
};

const eventErrRedeemed = {
  ty: 'PointsAdded',
  data: dataErr
};

const url = '/events';

describe('Add score - POST type: Add points', () => {
  it('should respond with a 200 status', async () => {
    const response = await request(app).post(url).send(eventOkAdd);
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.score).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.documentCc).toBeDefined();
  });

  it('response2 points must be highter than response1 points ', async () => {
    const response1 = await request(app).post(url).send(eventOkAdd);
    const response2 = await request(app).post(url).send(eventOkAdd);
    expect(response1.body.score < response2.body.score).toEqual(true);
  });

  it('bad data- response with a 400 status', async () => {
    const response = await request(app).post(url).send(eventErrAdd);
    expect(response.statusCode).toBe(400);
  });

  it('bad data- should have array with 5 errors descriptions', async () => {
    const response = await request(app).post(url).send(eventErrAdd);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(5);
  });
});

describe('Redeem score - POST points Redeemed', () => {
  it('new score must be less than old score', async () => {
    const myScore = await request(app).post(url).send(eventOkRedeem);
    expect(myScore.statusCode).toBe(200);
    const response = await request(app)
      .post(url)
      .send({
        ...eventOkRedeem,
        data: { ...myScore.body, score: +myScore.body.score / 2 }
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.score).toBeDefined();
    expect(response.body.name).toBeDefined();
    expect(response.body.documentCc).toBeDefined();
  });

  it('must be Error when I try to redeem, and I dont have the points enough', async () => {
    const myScore = await request(app).post(url).send(eventOkRedeem);
    expect(myScore.statusCode).toBe(200);

    const response = await request(app)
      .post(url)
      .send({
        ...eventOkRedeem,
        data: { ...myScore.body, score: +myScore.body.score * 2 }
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
  });

  it('bad data- response with a 400 status', async () => {
    const response = await request(app).post(url).send(eventErrRedeemed);
    expect(response.statusCode).toBe(400);
  });

  it('bad data- should have array with 5 errors descriptions', async () => {
    const response = await request(app).post(url).send(eventErrRedeemed);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.errors).toBeDefined();
    expect(response.body.errors).toBeInstanceOf(Array);
    expect(response.body.errors.length).toEqual(5);
  });
});
