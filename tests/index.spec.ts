import { expect } from 'chai';
import request from 'supertest';
import app from '../src/server';

describe('Unit Test Methods', () => {
  it('should be return 2 === 2 ', () => {
    expect(2).to.be.equal(2);
  });
});

describe('Get Endpoint => "/"', () => {
  it('should return a status code 200', async () => {
    const res = await request(app).get('/');

    expect(res.status).to.be.equal(200);
  });

  it('should return a property message', async () => {
    const res = await request(app).get('/');

    expect(res.body).to.have.property('message');
  });
});
